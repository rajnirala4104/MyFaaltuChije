import React, { Component } from 'react'
// import './componentStyles/newsCardContainer.css';
import NewsCard from './NewsCard';


export default class NewsContainer extends Component {
  constructor() {
    super();
    // console.log("Hello world")
    this.state = {
      news: [],
      loading: false
    }
    const apiURL = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2139974812e64d308b801a24cb53aa65";
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        console.log(data.articles)
        // this.state.news = [];
        data.articles.forEach(newsDic => {
          this.state.news.push({
            newsTime: newsDic.publishedAt,
            newsTitle: newsDic.title,
            newsDescription: newsDic.description,
            imageURL: newsDic.urlToImage,
            readMore: newsDic.url
          })
        })
        this.setState(this.state.news)
      })
      .catch(error => console.error(error));
  }
  
  render() {
    return (
      <div className='row newsCardConatiner p-3'>
        {this.state.news.map((News, index) => {
          return (
            <NewsCard key={index} imageURL={News.imageURL} newsTime={News.newsTime} newsTitle={News.newsTitle} newsDescription={News.newsDescription} readMore={News.readMore}/>
          )
        })}
      </div>
    )
  }

}
