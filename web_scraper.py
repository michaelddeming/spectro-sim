import  requests
import json
import re



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
        print("Error 404, Invalid Search Reponse.")




def get_data_via_cid(cid: int):

    url = f"https://pubchem.ncbi.nlm.nih.gov/rest/pug_view/data/compound/{cid}/JSON"

    response = requests.get(url)

    try:
        compound_data = response.json()
        return compound_data["Record"]["Section"]

    except KeyError:
        print("Error, Compound Name Invalid.")
    except TypeError:
        print("Error 404, Invalid Search Reponse.")



def write_data(data: json):

    with open("compound_data.json", "w+", newline="") as file:
        json.dump(data, file)




# get_data_via_cid(get_cid("asprin"))

