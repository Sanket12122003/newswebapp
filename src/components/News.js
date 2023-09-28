import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

class News extends Component {
  static defaultProps ={
    country: "in",
    pageSize: 6,
    category: "General" // Fixed typo here
  }
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    await this.updateNews();
  }

  async updateNews() {
    this.setState({ loading: true });
    const apiKey = "6a3f1d8f96564c10a5ffa1ed973c1d88"; // Replace with your News API key
  
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${apiKey}&pageSize=${this.props.pageSize}`; // Your API URL
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      console.log(data.articles); // Log the fetched articles
  
      this.setState({
        articles: data.articles,
        totalResults: data.totalResults,
        loading: false
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  }
  

  handlePrevClick = async () => {
    if (this.state.page > 1) {
      const apiKey = "6a3f1d8f96564c10a5ffa1ed973c1d88";
      const prevPage = this.state.page - 1;

      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${apiKey}&page=${prevPage}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      const response = await fetch(url);
      const data = await response.json();

      this.setState({
        page: prevPage,
        articles: data.articles,
        loading: false
      });
    }
  };

  handleNextClick = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
      const apiKey = "6a3f1d8f96564c10a5ffa1ed973c1d88";
      const nextPage = this.state.page + 1;

      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${apiKey}&page=${nextPage}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      const response = await fetch(url);
      const data = await response.json();

      this.setState({
        page: nextPage,
        articles: data.articles,
        loading: false
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center" style={{ margin: "30px 0px",marginTop:"90px" }}>
           World Wide News - Top Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row my-3">
          {!this.state.loading && this.state.articles&&
            this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  publishedAt={element.publishedAt}
                />
              </div>
            ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
