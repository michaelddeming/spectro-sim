import numpy as np
import matplotlib.pyplot as plt
import json


class Compound:

    def __init__(
        self,
        name: str,
        lambda_max: int,
        epsilon_max: int,
        sigma: int,
        concentration: float = None,
    ):
        self.name = name
        self.lambda_max = lambda_max
        self.epsilon_max = epsilon_max
        self.sigma = sigma
        self.concentration = concentration
        self.generated_epsilons = []
        self.generated_absorption = []
        self.WAVE_LENGTHS = [val for val in range(1,1001,3)]

    def gen_gaussian_distribution(self, wave_lengths: list):
        for wave_length in wave_lengths:

            epsilon = self.epsilon_max * np.exp(
                -((wave_length - self.lambda_max) ** 2) / ((2 * self.sigma) ** 2)
            )
            self.generated_epsilons.append(epsilon)

    def gen_absorption(self, epsilons: list, light_length: float):
        for epsilon in epsilons:

            absorbance = epsilon * light_length * self.concentration
            self.generated_absorption.append(absorbance)


# TESTING
# ---------------------------

# compounds = []
# SIGMA = 15 # width of the curve (typically between 10 and 20)
# LIGHT_LENGTH = 1.0 # distance of cuvette from light source (typically 1.0cm)

# with open("cache/compound_cache.json", "r") as file:
#     file_content = json.load(file)


#     for key, value in file_content.items():
#         compound = Compound(name = value["name"],
#                             lambda_max= value["lambda_max"],
#                             epsilon_max=value["epsilon"],
#                             sigma=SIGMA)
#         compounds.append(compound)

# print(compounds)

# test_comp = compounds[0]
# test_comp.concentration = 1e-5

# test_comp.gen_gaussian_distribution(test_comp.WAVE_LENGTHS)
# test_comp.gen_absorption(test_comp.generated_epsilons, light_length=LIGHT_LENGTH)




# plt.plot(test_comp.WAVE_LENGTHS, test_comp.generated_absorption)
# plt.title(f"Absorption Spectroscopy of {(test_comp.name).title()}")
# plt.xlabel("Wavelength (nm)")
# plt.ylabel("A(λ)")
# plt.show()