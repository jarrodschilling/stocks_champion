// Import necessary modules
import express from 'express'; // Import Express framework for building the server
import cors from 'cors'; // Import CORS module to allow cross-origin resource sharing
import dotenv from 'dotenv'; // Import dotenv to read environment variables from .env files
import dbConnect from './config/mongoose.config.js'; // Import function to connect to database
import router from './routes/stock.routes.js'; // Import router for handling API routes
import extractValidationErrors from './util/ErrorExtractor.js';

// Connect to the database
dbConnect();

// Create an instance of the Express application
const app = express();

// Parse JSON requests and use CORS to enable cross-origin requests
app.use(express.json(), cors());


// ERROR NORMALIZATION
app.use((err, req, res, next) => {
    err.name === "ValidationError"? err.statusCode = 400 : ""
    console.log(err.errors)

    // NORMALIZE THE ERROR
    const normalizedError = {
        statusCode: err.statusCode || 500,
        message: err.message || "Something went wrong",
        name: err.name || "Server Error",
        // IMPORT extractValidationErrors.js from ErrorExtractor.js
        validationErrors: extractValidationErrors(err)
    }

    // Return the normalized error
    res.status(normalizedError.statusCode).json(normalizedError)
})


// Load environment variables from .env file
dotenv.config();

// Use the router middleware for handling API routes under /api prefix

app.use('/api', router)


// Start the server and listen on specified port from environment variables
const PORT = process.env.PORT;
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);
