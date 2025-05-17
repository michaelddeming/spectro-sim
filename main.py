import numpy as np
import matplotlib.pyplot as plt
import json

from classes.Compound import Compound

from globals import *

compounds = []

with open("database/database.json", "r") as file:
    file_content = json.load(file)

    for row in file_content:
        compound = Compound(name = row["name"],
                            lambda_max= row["lambda_max"],
                            epsilon_max=row["epsilon_max"],
                            sigma=row["sigma"])
        compounds.append(compound)

test_comp = compounds[0]
test_comp.concentration = 0.045

test_comp.gen_gaussian_distribution(WAVE_LENGTHS)
test_comp.gen_absorption(test_comp.generated_epsilons, light_length=1.0)


for val in test_comp.generated_absorption:
    print(val)


plt.plot(WAVE_LENGTHS, test_comp.generated_absorption)
plt.title(f"Absorption Spectroscopy of {(test_comp.name).title()}")
plt.xlabel("Wavelength (nm)")
plt.ylabel("A(λ)")
plt.show()






