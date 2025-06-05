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

    found_compound = content.get(name)

    if found_compound:
        return {found_compound["name"]: found_compound}

    try:
        # Web Scrape Functions
        compound_dict = get_cid(name)
        compound_dict = get_data_via_cid(compound_dict)
        compound_dict = extract_abs_spectro(compound_dict)

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


        content[compound_dict["name"].lower()] = compound_dict

        with open("cache/compound_cache.json", "w") as file:

            json.dump(content, file, indent=2)

        return {compound_dict["name"]: compound_dict}

    except (ValueError, TypeError) as e:
        print(e)
        raise HTTPException(status_code=404, detail=str(e))
