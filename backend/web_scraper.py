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
        return {"name": name.lower(), "cid": compound_data["IdentifierList"]["CID"][0]}
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
        try:
            compound_desc = get_description(response.json())
        except ValueError as e:
            compound_desc = f"No description found for #{compound_dict["cid"]}:{compound_dict["name"]}."

        compound_dict["compound_data_string"] = response.text
        compound_dict["description"] = compound_desc
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


def write_data(data: json, indicator: int):

    with open(f"compound_data{indicator}.json", "w", newline="") as file:
        json.dump(data, file, indent=2)


def get_section(sections: list, Heading: str, key: str):

    if sections and isinstance(sections[0], dict):
            for section in sections:
                if section[key] == Heading:
                    return section
            return None
    else:
        raise ValueError("No sections to parse.")


def get_description(data: json) -> str:

    temp = data["Record"]["Section"]
    
    sections = get_section(temp, "Names and Identifiers", "TOCHeading")
    
    if sections:
        sections = get_section(sections["Section"], "Record Description", "TOCHeading")
        
    
    info = sections.get("Information", None)

    if info:
        ref = info[0].get("Reference", None)
        desc = info[0].get("Value", None)
    if desc:
        desc = desc.get("StringWithMarkup", None)
    if desc:
        desc = desc[0].get("String")
    write_data(info, 1)
    if ref:
        ref = ref[0]
    
    if desc:
        return {"description": desc,
            "reference": ref}
    raise ValueError("Error: No description found.")


cid = get_cid("benzoic acid")
data_dict = get_data_via_cid(cid)
print(extract_abs_spectro(data_dict))