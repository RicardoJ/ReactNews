import React,{Component, Fragment} from 'react';
import Header from './components/Header'

class App extends Component {
  state = {  
    news: []
  }

   componentDidMount(){
    this.checkNews();
  }
  checkNews  = async () =>{
    const url ='https://newsapi.org/v2/top-headlines?country=co&apiKey=272d682930b74cfb8cd566c0be00669a';
    const response  = await fetch(url);
    const news = await response.json();
    this.setState({
      news: news.articles
    })
  }
  
  render() { 
    return ( <Fragment>
      <Header
      titleHeader = 'Noticias'
      />
      <div className= "container white contenedor-noticias">
        
      </div>
    </Fragment>);
  }
}
 
export default App;


