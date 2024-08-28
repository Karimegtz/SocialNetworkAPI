# SocialNetworkAPI

## Description
The SocialNetworkAPI is a RESTful API built for a social networking web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This project utilizes MongoDB as the database, Mongoose as the ODM (Object Data Modeling), and Express.js for routing. This API handles large amounts of unstructured data, making it ideal for social media platforms.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [License](#license)

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Karimegtz/SocialNetworkAPI.git
2. Navigate to the project directory:
   ```bash
   cd SocialNetworkAPI 
3. Install dependencies:
   ```bash
   npm install
4. Ensure you have MongoDB installed and running on your machine. If not, follow the MongoDB installation guide.
   ```bash
   git clone https://github.com/Karimegtz/SocialNetworkAPI.git
5. Start the application:
   ```bash
   npm start
This command will start the server and sync the Mongoose models to the MongoDB database.
## Usage

Once the server is running, you can interact with the API using a tool like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/). The following functionalities are available:

- **Users**: Create, read, update, and delete users.
- **Thoughts**: Create, read, update, and delete thoughts.
- **Reactions**: Add and remove reactions to thoughts.
- **Friends**: Add and remove friends from a user's friend list.

### Example commands:

- **Get all users**: `GET /api/users`
- **Create a new user**: `POST /api/users`
- **Get a single user**: `GET /api/users/:userId`
- **Update a user**: `PUT /api/users/:userId`
- **Delete a user**: `DELETE /api/users/:userId`

## API Endpoints

Here’s a brief overview of the main API endpoints:

### `/api/users`

- `GET /api/users`: Retrieve all users.
- `GET /api/users/:userId`: Retrieve a single user by their ID, including their thoughts and friend list.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:userId`: Update a user by their ID.
- `DELETE /api/users/:userId`: Delete a user by their ID. **Bonus**: Also deletes the user's associated thoughts.

### `/api/users/:userId/friends/:friendId`

- `POST`: Add a friend to a user's friend list.
- `DELETE`: Remove a friend from a user's friend list.

### `/api/thoughts`

- `GET /api/thoughts`: Retrieve all thoughts.
- `GET /api/thoughts/:thoughtId`: Retrieve a single thought by its ID.
- `POST /api/thoughts`: Create a new thought.
- `PUT /api/thoughts/:thoughtId`: Update a thought by its ID.
- `DELETE /api/thoughts/:thoughtId`: Delete a thought by its ID.

### `/api/thoughts/:thoughtId/reactions`

- `POST`: Add a reaction to a thought.
- `DELETE`: Remove a reaction by its reaction ID.

## Models

### User Model

- `username`: String, unique, required, trimmed.
- `email`: String, required, unique, must match a valid email address.
- `thoughts`: Array of `_id` values referencing the `Thought` model.
- `friends`: Array of `_id` values referencing the `User` model (self-reference).

#### Schema Settings:

- **Virtual**: `friendCount` - Retrieves the length of the user's `friends` array.

### Thought Model

- `thoughtText`: String, required, between 1 and 280 characters.
- `createdAt`: Date, default is current timestamp, formatted via getter method.
- `username`: String, required (user who created the thought).
- `reactions`: Array of nested documents created with the `reactionSchema`.

#### Schema Settings:

- **Virtual**: `reactionCount` - Retrieves the length of the thought's `reactions` array.

### Reaction Schema (Subdocument)

- `reactionId`: ObjectId, default is a new ObjectId.
- `reactionBody`: String, required, 280 characters maximum.
- `username`: String, required.
- `createdAt`: Date, default is current timestamp, formatted via getter method.

## Deployed Application
You can access the deployed application [here](https://socialnetworkapi-6vfr.onrender.com).


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
