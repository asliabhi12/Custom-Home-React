import  { useState, useEffect } from 'react';
import axios from 'axios';


const GoogleNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Get your API key from the environment variable
    const apiKey = "3e050ecade8348e284dc1709695e005f";

    // Make sure the API key is available
    if (!apiKey) {
      console.error('API key not provided. Please add REACT_APP_NEWS_API_KEY to your .env file.');
      return;
    }
    const apiUrl = `https://newsapi.org/v2/everything?q=keyword&apiKey=${apiKey}`;

    // Fetch news data from the API
    axios.get(apiUrl)
      .then(response => {
        // Update the state with the fetched news data
        setNews(response.data.articles);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  const limitedNews = news.slice(0, 10);

  return (
    <div className="ele-container" id="ele-7">
      <nav>
        <h2>Google News</h2>
      </nav>
      <div className="news-container">
        {limitedNews.map((article, index) => (
          <div className="news-item" key={index}>
            <div className="news-left-text">
              <div className="news-headline">
                <h3>{article.title}</h3>
              </div>
              <div className="lower-metadata">
                <span className="news-date-time">{article.publishedAt}</span>
                {/* <img src={article.urlToImage} alt="" /> */}
              </div>
            </div>
            <div className="news-thumbnail">
              <img src={article.urlToImage} alt="" style={{width:"225px", height:"139px"}}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GoogleNews