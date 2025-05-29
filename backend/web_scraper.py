import requests
import json
import re



def get_cid(name: str) -> dict:

    """Given the name of a compound, search PubChem via PUG Rest API for the CID for the compound within the online database. 
    
    PUG Rest API returns a response obj of minimal data related to a compound, like its CID.'

    Returns a dict containing the name, and CID of the compound name provided."""
    
    url = f"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/{name}/cids/JSON"

    response = requests.get(url)

    try:      
        compound_data = response.json()
        return {"name":name.lower(), 
                "cid":compound_data["IdentifierList"]["CID"][0]}
    except KeyError:
        raise ValueError(f"Invalid compound name={name}.")
    




def get_data_via_cid(compound_dict: dict) -> dict:

    """Given the dict returned by get_cid(), search PubChem via PUG_View Rest API for the compound data pertaining to the CID within the dict provided.
    
    Returns a dict for compound_name, compound_cid, compound_data_text."""

    url = f"https://pubchem.ncbi.nlm.nih.gov/rest/pug_view/data/compound/{compound_dict["cid"]}/JSON"
    
    try:
        response = requests.get(url)
    except TypeError:
        raise ValueError("Error 404, Invalid Search Response.")
    
    if response:
            compound_dict["compound_data_string"] = response.text
            return compound_dict

def extract_abs_spectro(compound_dict) -> dict:
    """Given the compound_dict returned by the get_data_via_cid(), search for a 'MAX ABSORPTION...' pattern within the compound_data_string within the compound_dict provided (compound_dict["compound_dict"]])."""

    pattern = r"MAX ABSORPTION \((.+)\): (\d+) \w{2} \(LOG E= (.+?)\)"
    # group 1 -> Solvent (Alcohol)
    # group 2 -> lambda_max (NM)
    # group 3 -> epsilon
    found_match = {}
    match = re.search(pattern, compound_dict["compound_data_string"])
    if match:
        compound_dict["solvent"] = match.group(1).lower()
        compound_dict["lambda_max"] = float(match.group(2))
        epsilon = round(10 ** float(match.group(3)), 2)
        compound_dict["epsilon"] = epsilon

        del compound_dict["compound_data_string"]
        return compound_dict
    else:
        raise ValueError(f"Error: No UV/Vis data found for {compound_dict["name"]}.")

cid = get_cid("asprin")
data_dict = get_data_via_cid(cid)
print(extract_abs_spectro(data_dict))

def write_data(data: json, indicator: int):

    with open(f"compound_data{indicator}.json", "w+", newline="") as file:
        json.dump(data, file)


# --------------------------------------------------------------
"""Refactored into single regex pattern scan across API response."""
# def get_spectral_information(data: json) -> json:
#     for section in data:
#         if section["TOCHeading"] == "Spectral Information":
#             return section
#     raise ValueError("Error, TOCHeading = Spectral Information not found")

# def get_uv_spectra_information(data: json) -> list:

#     for section in data["Section"]:
#         if section["TOCHeading"] == "UV Spectra":

#             if "Information" in section:
#                 information = section.get("Information")
#                 values = []

#                 for dictionary in information:
#                     if "Value" in dictionary:
#                         value = dictionary.get("Value")
#                         value = value.get("StringWithMarkup")
#                         value = value[0].get("String")
#                         values.append(value)
#                 return values
#             return None
#     raise ValueError("Error, TOCHeading = UV Spectra not found")