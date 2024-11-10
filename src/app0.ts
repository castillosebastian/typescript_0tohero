// src/app.ts
import { config } from 'dotenv';
import axios from 'axios';

// Load environment variables from .env file
config();

// Retrieve environment variables
const API_KEY = process.env.API_KEY!;
const API_URL = process.env.API_URL!;

if (!API_KEY || !API_URL) {
  throw new Error('Missing API_KEY or API_URL in environment variables.');
}

// Function to fetch data from the API
async function fetchData(): Promise<void> {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });

    console.log('Data fetched successfully:', response.data);
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
  }
}

// Execute the function
fetchData();
