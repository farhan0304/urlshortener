# URL SHORTNER

A simple URL shortener service built with Node.js, Express, Mongoose, and React. This service allows you to shorten URLs, redirect to the original URL, and analyze link visits.

## Features

- **Shorten URLs**: Convert long URLs into short, manageable links.
- **Redirect**: Redirect short URLs to the original long URL.
- **Analyze Links**: Track how many times a short URL has been visited and when.

## Installation

### Backend

1. **Clone the repository:**

   ```bash
   git clone https://github.com/farhan0304/urlshortener.git

2. **Navigate to the backend directory:**

    ```bash
    cd urlshortener/backend

3. **Install dependencies:**

    ```bash
    npm install

4. **Set up environment variables:**

    Create a `.env` file in the `backend` directory and add the following:
    ```makefile
    MONGO_URI=your_mongodb_connection_string
    PORT=8000

5. **Start the server:**

    ```bash
    npm start

### Frontend

1. **Navigate to the frontend directory:**

    ```bash
    cd urlshortener/frontend

2. **Install dependencies:**

    ```bash
    npm install

3. **Start the React app:**

    ```bash
    npm run dev

## API ENDPOINTS

## POST '/api'

Shorten a given URL.

**Request body:**
    
    ```json
    {
        "redirectedurl": "https://www.example.com""
    }

**Response**

    ```json
    {
        "shortid": "abc123",
        "shortUrl": "http://localhost:5000/api/abc123"
    }

### GET `/api/:shortid`

Redirect to the original URL based on the short ID.

Example:
* Request: `GET http://localhost:8000/api/abc123`
* Redirects to: `https://www.example.com`

### GET `/api/analyst/:shortid`

Get the number of times a short URL has been visited and the timestamps of each visit.

Resoponse
    
    ```json
    {
        "TotalVisited": "4",
        "Time": "1723970910500,1723970992093,1723971005012,1723971006093"
    }

## Acknowledgements

* [Node.js][node-link] for the backend runtime.
* [Express][express-link] for the web framework.
* [Mongoose][mongoose-link] for MongoDB object modeling.
* [React][react-link] for the frontend library;

[node-link]: https://nodejs.org/en
[express-link]: https://expressjs.com/
[mongoose-link]: https://mongoosejs.com/
[react-link]: https://react.dev/
