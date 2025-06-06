import json

from classes.Compound import Compound

import requests
from web_scraper import *


from fastapi import FastAPI, HTTPException

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = ["http://localhost:5173", "http://127.0.0.1:8000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"Test": "Test"}


@app.get("/absorbsim-compound")
def get_compound(name: str = None):
    if not name:
        raise HTTPException(status_code=404, detail="Missing compound name.")

    # keys (compound names) forced to lower for consitent searches
    name = name.lower()

    try:
        with open("cache/compound_cache.json", "r") as file:
            content = json.load(file)
    except FileNotFoundError:
        content = {}

    if name in content:
        found_compound_data = content.get(name)
        
        if not found_compound_data:
            raise HTTPException(status_code=404, detail=str(f"Error -> No UV/Vis data found for {name.title()}!"))
        # update the search count 
        found_compound_data["search_count"] = found_compound_data.get("search_count", 0) + 1
        with open("cache/compound_cache.json", "w") as file:
            json.dump(content, file, indent=2)
            
        return {found_compound_data["name"]: found_compound_data}
        
        

    try:
        # Web Scrape Functions
        compound_dict = get_cid(name)
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    
    compound_dict = get_data_via_cid(compound_dict)
    try:
        compound_dict = extract_abs_spectro(compound_dict)
    except (ValueError) as e:

        
        del compound_dict["compound_data_string"]
        del compound_dict["cid"]
        del compound_dict["description"]
        del compound_dict["desc_ref"]


        content[compound_dict["name"].lower()] = None

        with open("cache/compound_cache.json", "w") as file:
            json.dump(content, file, indent=2)

        raise HTTPException(status_code=404, detail=str(e))

    # create a Compound class to access methods

    compound = Compound(
        name=compound_dict["name"],
        absorb_spectro_data=compound_dict["absorb_spectro_data"],
        light_distance=1.0,
        sigma=1,
        concentration=1e-3,
    )

    # Add gaus dist. and abs value arrays for a compound.
    compound.gen_gaussian_distribution(compound.WAVE_LENGTHS)

    # overwrite the partial compound dict from webscrape with gaus. and abs. info.
    compound_dict |= compound.__dict__

    del compound_dict["sigma"]
    del compound_dict["concentration"]
    del compound_dict["light_distance"]
    del compound_dict["WAVE_LENGTHS"]

    # update the search count 
    compound_dict["search_count"] = compound_dict.get("search_count", 0) + 1
    

    content[compound_dict["name"].lower()] = compound_dict

    with open("cache/compound_cache.json", "w") as file:

        json.dump(content, file, indent=2)

    return {compound_dict["name"]: compound_dict}



