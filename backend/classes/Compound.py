import numpy as np

class Compound:

    def __init__(self, name: str, lambda_max: int, epsilon_max: int, sigma: int, concentration: float = None):
        self.name = name
        self.lambda_max = lambda_max
        self.epsilon_max = epsilon_max
        self.sigma = sigma
        self.concentration = concentration
        self.generated_epsilons = []
        self.generated_absorption = []
        
    def gen_gaussian_distribution(self, wave_lengths: list):
        for wave_length in wave_lengths:
            
            epsilon = self.epsilon_max * np.exp(-((wave_length - self.lambda_max)**2)/((2*self.sigma)**2))
            self.generated_epsilons.append(epsilon)
    
    def gen_absorption(self, epsilons: list, light_length: float):
        for epsilon in epsilons:
            
            absorbance = epsilon * light_length * self.concentration
            self.generated_absorption.append(absorbance)
        
        
        
