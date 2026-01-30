# CognifyApi Google Images Search API - Implementation Guide 🚀

This repository provides a quick-start guide and documentation for implementing the **Google Images Search API** via [Cognify API](https://cognifyapi.com). This API allows developers to programmatically fetch high-quality image results from Google's index.

---

## 🔗 Official Resources
- **API Documentation:** [Cognify API Google Images Docs](https://cognifyapi.com/docs/google-images-docs)
- **Official Website:** [CognifyAPI.com](https://cognifyapi.com/)
- **Provider Platform:** [RapidAPI Link](https://rapidapi.com/johnjames28/api/google-images4)

---

## 🛠 Features
- **Massive Database:** Access Google's vast image repository.
- **Advanced Metadata:** Get image dimensions (width/height) and MIME types.
- **Auto-Complete:** Access Google search suggestions alongside image results.
- **Scalable:** Built on high-performance infrastructure for production apps.

## 🚀 Getting Started

### Base URL
`https://google-images4.p.rapidapi.com`

### 1. Fetch Images (`/getGoogleImages`)
Retrieve images based on a search keyword.

**Parameters:**
| Parameter | Required | Description |
| :--- | :--- | :--- |
| `query` | Yes | Search keyword (e.g., "SpaceX") |
| `count` | No | Number of results (Default: 100) |
| `imageInfo`| No | Set to `true` to return width, height, and mime type. |

**Example Request (Node.js/Axios):**
```javascript
const axios = require('axios');

const options = {
  method: 'GET',
  url: '[https://google-images4.p.rapidapi.com/getGoogleImages](https://google-images4.p.rapidapi.com/getGoogleImages)',
  params: {query: 'SpaceX', count: '5', imageInfo: 'true'},
  headers: {
    'X-RapidAPI-Key': 'YOUR_API_KEY',
    'X-RapidAPI-Host': 'google-images4.p.rapidapi.com'
  }
};

axios.request(options).then(response => {
    console.log(response.data);
}).catch(error => {
    console.error(error);
});
