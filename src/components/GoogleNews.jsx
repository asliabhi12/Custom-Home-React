import React, { useState, useEffect } from "react";

import axios from "axios";

// api key = 883bb85b9ced4f02be153067bf11934e

const GoogleNews = () => {
  const [news, setNews] = useState([]);
  const API_KEY = "883bb85b9ced4f02be153067bf11934e";

  useEffect(() => {
    fetchNews()
  }, []);

  const fetchNews = () => {
    const random = Math.random();
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&pageSize=10_=${random}`)
      .then(response => {
        setNews(response.data.articles);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (dateString) => {
    const options = { hour: "numeric", minute: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", options);
  };

  return (
    // <div>
    //   {news.map((article, index) => (
    //     <div key={index}>
    //       <h2>{article.title}</h2>
    //       <img src={article.urlToImage} alt={article.title} />
    //       <p>{article.description}</p>
    //     </div>
    //   ))}
    // </div>

    <div class="ele-container" id="ele-7">
      <nav>
        <h2>Google News</h2>
        <button onClick={fetchNews}>Refresh</button>
      </nav>
      {news.map((article, index) => (
        <div class="news-container" key={index}>
          <div class="news-item">
            <div class="news-left-text">
              <div class="news-headline">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
              <div class="lower-metadata">
                <span class="news-date-time">
                  {formatDate(article.publishedAt)} at{" "}
                  {formatTime(article.publishedAt)}
                </span>
                Source: {article.source.name}
              </div>
            </div>
            <div class="news-thumbnail">
              <img src={article.urlToImage} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GoogleNews;
