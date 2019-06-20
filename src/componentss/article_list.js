import React, {Component} from "react";
import Article from "./article";

class ArticleList extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            articleId: null
        }
    }

    render() {
        return (
            <div className="article_list">
                {this.body}
            </div>
        )
    }
    toggleOpenArticle = (articleId) => this.setState({articleId});
    get body() {
        return this.props.articles.map((article) =>
            <div className="article_item" key={article.id}>
                <Article
                    article={article}
                    isOpen={this.state.articleId === article.id}
                    openToggle={this.toggleOpenArticle}
                />
            </div>
        )
    }
}

export default ArticleList;
