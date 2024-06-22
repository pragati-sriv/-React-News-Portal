import axios from "axios";

const apiKey = "f47776f2b0414c708071360081528211";
const apiUrl =
  "https://newsapi.org/v2/everything?q=keyword&apiKey=f47776f2b0414c708071360081528211";

const fetchNews = async (query) => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        q: query,
        apiKey: apiKey, 
      },
    });
    console.log(response.data.articles);
    return response.data.articles;
  } catch (error) {
    console.error(
      "Error fetching news:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Failed to fetch news");
  }
};