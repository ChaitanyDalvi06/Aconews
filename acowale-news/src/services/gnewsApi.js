const API_KEY = '36a5c1722e1eb02eedfc14247fac9ea7';
const BASE_URL = `https://gnews.io/api/v4/search`;

export const fetchNews = async (query = 'latest', page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${query}&token=${API_KEY}&lang=en&page=${page}&max=10`
    );
    const data = await response.json();
    console.log("Fetched news data:", data); // Log to verify the data structure
    return data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return { articles: [], totalArticles: 0 }; // Return a default structure on error
  }
};
