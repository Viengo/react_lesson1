import React,{Component} from 'react';
import ArticleList from './components/article_list';
import articles from './fixtures';

class App extends Component {
  render(){
    return (
        <div className="App">
          <ArticleList articles={articles}/>
        </div>
    );
  }
}

export default App;
