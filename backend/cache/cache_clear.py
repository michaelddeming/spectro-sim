import json


def cache_clear():
    try:
        with open("compound_cache.json", "r") as file:
            cache = json.load(file)
    except (FileNotFoundError):
        print("Error: Cache not found, cache_clear unsuccessful.")
        return None
    except json.JSONDecodeError:
        print("Error: Cache empty, cache_clear unsuccessful.")
        return None

    to_be_deleted = set()

    for compound_name, compound_data in cache.items():

        # clears out all Compounds with no UV/Vis data.
        if compound_data is None or compound_data["search_count"] <= 3:
            to_be_deleted.add(compound_name)
        

    for compound_name in to_be_deleted:
        del cache[compound_name]


    # write updated cache back to compound_cache.json
    with open("compound_cache.json", "w") as file:
        json.dump(cache, file, indent=2)
    
    return None
        
if __name__ == "__main__":
    cache_clear()
