import React, {Component} from 'react';
import UserForm from "./lessons/lesson_1/UserForm";
import Select from "react-select";
import ArticleList from "./lessons/lesson_1/ArticleList";
import Range from "./lessons/lesson_1/Range";

class LessonContent extends Component {
    // constructor(...args){
    //     super(...args);
    //
    //     this.state = {
    //         openItem:null
    //     }
    // }
    render() {
        return (
            <div className="lesson_content">
                {/*<UserForm/>*/}
                {/*<Select options={this.options} value={this.state.openItem} onChange={this.handleSelect}/>*/}
                {/*<ArticleList articles={this.props.articles}/>*/}
                {/*<Range/>*/}
            </div>
        );
    }
    // get options() {
    //     return this.props.articles.map(article => ({
    //         label: article.title,
    //         value: article.id
    //     }))
    // }
    //
    // handleSelect = openItem => this.setState({openItem});
}

export default LessonContent;