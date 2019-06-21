import React, {Component} from 'react';
import Article from './Article'
import accordion from '../../../decorators/accordion';

class ArticleList extends Component {
    render() {
        return (
            <div className="article_list">
                {this.body}
            </div>
        );
    }

    get body(){
        const{articles,itemOpenId,toggleItemOpen} = this.props;
        return(
            articles.map((article)=>
                <Article
                    key={article.id}
                    article={article}
                    isOpen={article.id === itemOpenId}
                    toggleOpen={toggleItemOpen}
                />
            )
        )
    }
}
const DecoratedArticleList = accordion(ArticleList);
export default DecoratedArticleList;