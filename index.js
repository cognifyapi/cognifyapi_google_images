const axios = require('axios');
// 1. Configuration
const API_KEY = 'YOUR_RAPIDAPI_KEY_HERE'; // Get this from RapidAPI
const QUERY = 'Blue Ocean';

// 2. Execution Get Images with imageInfo
const optionsOne = {
  method: 'GET',
  url: 'https://google-images4.p.rapidapi.com/getGoogleImages',
  params: {
    query: QUERY,
    count: '5',       // Number of images
    imageInfo: 'true' // Returns size and type
  },
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'google-images4.p.rapidapi.com'
  }
};

async function getImagesImageInfo() {
  try {
    console.log(`Searching for: ${QUERY}...`);
    const response = await axios.request(optionsOne);
    
    // Log the first image URL found
    const firstImage = response.data.images[0];
    console.log('Success! Found image:', firstImage.url);
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// 3. Execution Get Images

const optionsTwo = {
  method: 'GET',
  url: 'https://google-images4.p.rapidapi.com/getGoogleImages',
  params: {
    query: QUERY,
    count: '5',       // Number of images
  },
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'google-images4.p.rapidapi.com'
  }
};

async function getImages() {
  try {
    console.log(`Searching for: ${QUERY}...`);
    const response = await axios.request(optionsTwo);
    
    // Log the first image URL found
    const firstImageUrl = response.data.images[0];
    console.log('Success! Found image:', firstImageUrl);
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

getImagesImageInfo();
getImages();
