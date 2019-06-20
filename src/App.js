import React, {Component} from 'react';
import Select from 'react-select';
import ArticleList from './components/ArticleList';
import UserForm from './components/UserForm';
import Range from './components/Range';
import 'react-day-picker/lib/style.css';
import articles from './fixtures';

class App extends Component {
    constructor(...args){
        super(...args);

        this.state={
            openItem:null
        }
    }
    render() {
        return (
            <div className="App">
                <UserForm/>
                <Select options={this.options} value={this.state.openItem} onChange={this.handleSelect}/>
                <ArticleList articles={articles}/>
                <Range/>
            </div>
        )
    }

    get options() {
        return articles.map(article => ({
            label: article.title,
            value: article.id
        }))
    }

    handleSelect = openItem => this.setState({openItem});
}

export default App;
