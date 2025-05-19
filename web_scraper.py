import  requests
import json
import pprint



def get_cid(name: str) -> int:

    """Given the name of a compound, search PubChem via PUG Rest API for the CID for the compound within the online database. 
    
    PUG Rest API returns a response obj of minimal data related to a compound, like its CID.'

    Returns the CID of the compound name provided, as an int. 
    """
    
    url = f"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/{name}/cids/JSON"

    response = requests.get(url)

    try:      
        compound_data = response.json()
        return compound_data["IdentifierList"]["CID"][0]
    except KeyError:
        print("Error, Compound Name Invalid.")
    except TypeError:
        print("Error 404, Invalid Search Response.")




def get_data_via_cid(cid: int):

    url = f"https://pubchem.ncbi.nlm.nih.gov/rest/pug_view/data/compound/{cid}/JSON"

    response = requests.get(url)

    try:
        compound_data = response.json()
        return compound_data["Record"]["Section"]

    except KeyError:
        print("Error, Compound Name Invalid.")
    except TypeError:
        print("Error 404, Invalid Search Response.")


def get_spectral_information(data:json) -> json:
    for section in data:
        if section["TOCHeading"] == "Spectral Information":
            return section
    raise ValueError("Error, TOCHeading = Spectral Information not found")

def get_uv_spectra_information(data: json) -> json:

    for section in data["Section"]:
        if section["TOCHeading"] == "UV Spectra":

            if "Information" in section:
                information = section.get("Information")
                values = []

                for dictionary in information:
                    if "Value" in dictionary:
                        value = dictionary.get("Value")
                        value = value.get("StringWithMarkup")
                        value = value[0].get("String")
                        values.append(value)
                return values
            return None
    raise ValueError("Error, TOCHeading = UV Spectra not found")

def write_data(data: json, indicator: int):

    with open(f"compound_data{indicator}.json", "w+", newline="") as file:
        json.dump(data, file)





cid = get_cid("Toluene")

data = get_data_via_cid(cid=cid)
spectral_information = get_spectral_information(data=data)
values = get_uv_spectra_information(spectral_information)

for value in values:
    print(value)


