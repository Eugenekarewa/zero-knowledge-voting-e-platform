from flask import Flask, request, jsonify
from flask_cors import CORS
import uuid  # Import UUID for generating temporary IDs

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

topics = []  # List to store topics

@app.route('/topics', methods=['GET'])
def get_topics():
    """Fetch available topics for voting."""
    return jsonify(topics)

@app.route('/register', methods=['POST'])
def register_voter():
    """Register a voter."""
    data = request.json
    voter_id = data.get('voter_id', None)
    if not voter_id:
        # Generate a temporary identifier for users without a wallet address
        voter_id = generate_temp_id()
    nonce = register_voter_in_system(voter_id)  # Your existing registration logic
    return jsonify({'nonce': nonce})

def generate_temp_id():
    """Generate a temporary identifier for users without a wallet address."""
    return str(uuid.uuid4())  # Example of generating a UUID

def register_voter_in_system(voter_id):
    """Your existing logic to register a voter."""
    # Implement your registration logic here
    return "some_nonce"  # Replace with actual nonce generation logic
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

topics = []  # List to store topics

@app.route('/topics', methods=['GET'])
def get_topics():
    """Fetch available topics for voting."""
    return jsonify(topics)

@app.route('/register', methods=['POST'])
def register_voter():
    """Register a voter."""
    data = request.json
    voter_id = data.get('voter_id', None)
    if not voter_id:
        # Generate a temporary identifier for users without a wallet address
        voter_id = generate_temp_id()
    nonce = register_voter_in_system(voter_id)  # Your existing registration logic
    return jsonify({'nonce': nonce})

def generate_temp_id():
    """Generate a temporary identifier for users without a wallet address."""
    return str(uuid.uuid4())  # Example of generating a UUID

def register_voter_in_system(voter_id):
    """Your existing logic to register a voter."""
    # Implement your registration logic here
    return "some_nonce"  # Replace with actual nonce generation logic
from voting_system import VotingSystem

app = Flask(__name__)
voting_system = VotingSystem()

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    voter_id = data.get('voter_id')
    nonce = voting_system.register_voter(voter_id)
    return jsonify({'nonce': nonce})

@app.route('/vote', methods=['POST'])
def vote():
    data = request.json
    voter_id = data.get('voter_id')
    vote = data.get('vote')
    proof = data.get('proof')
    success = voting_system.cast_vote(voter_id, vote, proof)
    return jsonify({'success': success})

if __name__ == '__main__':
    app.run(debug=True)
