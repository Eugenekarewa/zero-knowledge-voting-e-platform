from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import rsa, padding
import random

class VotingSystem:
    def __init__(self):
        self.private_key = rsa.generate_private_key(
            public_exponent=65537,
            key_size=2048
        )
        self.public_key = self.private_key.public_key()
        self.voters = {}
        self.votes = []
        
    def register_voter(self, voter_id):
        # Generate unique voter commitment
        nonce = random.randint(1, 1000000)
        self.voters[voter_id] = nonce
        return nonce
    
    def cast_vote(self, voter_id, vote, proof):
        if voter_id not in self.voters:
            return False
            
        # Verify zero-knowledge proof
        if self.verify_proof(voter_id, vote, proof):
            encrypted_vote = self.public_key.encrypt(
                vote.encode(),
                padding.OAEP(
                    mgf=padding.MGF1(algorithm=hashes.SHA256()),
                    algorithm=hashes.SHA256(),
                    label=None
                )
            )
            self.votes.append(encrypted_vote)
            return True
        return False
