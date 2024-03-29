# Node.js Project API

This project is a simple Node.js API application that handles requests from the frontend and interacts with MongoDB database for data storage and retrieval.

## Installation

1. Make sure you have Node.js and MongoDB installed.
2. Clone the repository:

    ```bash
    git clone https://github.com/your-username/nodejs-api-project.git
    ```

3. Navigate to the project directory:

    ```bash
    cd nodeJS-backend
    ```

4. Install dependencies:

    ```bash
    npm install
    ```

5. This project uses environment variables for configuration. Create a `.env` file in the root directory of the project and add the following variables:

```plaintext
DB_HOST=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret_key
SENDGRID_API_KEY=your_sendgrid_api_key
HOST=your_host_address

## Usage

```bash
npm start
This command will start the API server on the specified port.

Documentation
Swagger is used for API documentation. The documentation is available at /api-docs after starting the server.
