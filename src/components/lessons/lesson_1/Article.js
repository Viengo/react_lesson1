import React, {PureComponent} from 'react';

class Article extends PureComponent {
    render() {
        const {article,isOpen} = this.props;
        return (
            <div className="article_item">
                <button onClick={this.buttonHandleClick}>{isOpen ? 'hide':'show'}</button>
                <div className="article">
                    <div className="username">{article.title}</div>
                    {isOpen && <div className="text">{article.text}</div>}
                </div>
            </div>
        );
    }
    buttonHandleClick = () => this.props.toggleOpen(this.props.article.id);
}

export default Article;