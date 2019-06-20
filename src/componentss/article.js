import React, {PureComponent} from "react";

class Article extends PureComponent {
    render() {
        const {article, isOpen} = this.props;

        return (
            <div className="article">
                <button onClick={this.handleButtonClick}>Toggle</button>
                <div className="user">{article.title}</div>
                {isOpen && <div className="message">{article.text}</div>}
            </div>
        )
    }
    handleButtonClick = () => this.props.openToggle(this.props.article.id);
}

export default Article;
