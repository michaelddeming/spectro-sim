import matplotlib.pyplot as plt
import json

from classes.Compound import Compound

from globals import *
import requests
from web_scraper import *


from fastapi import FastAPI, HTTPException

app = FastAPI()

@app.get("/absorbsim-compound")
def get_compound_name(name: str = None):
    if not name:
        raise HTTPException(status_code=404, detail="Missing compound name.")
    name = name.lower()

    try:
        with open("cache/compound_cache.json", "r") as file:
            content = json.load(file)
    except FileNotFoundError:
        content = {}
        
    found_compound = content.get(name)
        

    if found_compound:
        print(f"Extracted from cache: {found_compound}")
        return {found_compound["name"]:found_compound}
    
    try:
        compound_dict = get_cid(name)
        compound_dict = get_data_via_cid(compound_dict)
        compound_dict = extract_abs_spectro(compound_dict)

        content[compound_dict["name"]] = compound_dict

        with open("cache/compound_cache.json", "w") as file:

                json.dump(content, file, indent=2)

        return {compound_dict['name']:compound_dict}
            
        
    except (ValueError, TypeError) as e:
        raise HTTPException(status_code=404, detail=str(e))

                

        
    




























# compounds = []

# with open("database/database.json", "r") as file:
#     file_content = json.load(file)

#     for row in file_content:
#         compound = Compound(name = row["name"],
#                             lambda_max= row["lambda_max"],
#                             epsilon_max=row["epsilon_max"],
#                             sigma=row["sigma"])
#         compounds.append(compound)

# test_comp = compounds[0]
# test_comp.concentration = .01

# test_comp.gen_gaussian_distribution(WAVE_LENGTHS)
# test_comp.gen_absorption(test_comp.generated_epsilons, light_length=1.0)




# plt.plot(WAVE_LENGTHS, test_comp.generated_absorption)
# plt.title(f"Absorption Spectroscopy of {(test_comp.name).title()}")
# plt.xlabel("Wavelength (nm)")
# plt.ylabel("A(λ)")
# plt.show()






