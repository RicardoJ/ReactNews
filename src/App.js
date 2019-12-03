import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListNews from './components/ListNews';
import Form from './components/Form';
class App extends Component {
  state = {
    news: []
  }

  componentDidMount() {
    this.checkNews();
  }
  checkNews = async (category ='general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=f2f2746b213f4c0aa90e357e209bd944`;
    const response = await fetch(url);
    const news = await response.json();
    this.setState({
      news: news.articles
    })
  }

  render() {
    return (<Fragment>
      <Header
        titleHeader='Noticias'
      />
      <div className="container white contenedor-noticias">
        <Form
        checkNews = {this.checkNews}
        />
        <ListNews
          news={this.state.news}
        />
      </div>
    </Fragment>);
  }
}

export default App;


