import React from 'react'
import ArticleList from './ArticleList';

class Article extends React.Component {
    constructor(props) {

        super(props);

        this.state = {

            articles: [],
            article: {
                id: "",
                title: "",
                content: ""
            }
        };
    }

    onIdChange(event) {
        console.log(event.target.value);
        this.setState({ article: { ...this.state.article, id: event.target.value } });

    }

    onTitleChange(event) {
        console.log(event.target.value);
        this.setState({ article: { ...this.state.article, title: event.target.value } });
    }

    onContentChange(event) {
        console.log(event.target.value);
        this.setState({ article: { ...this.state.article, content: event.target.value } });
    }

    saveData(e) {
        console.log("saving");
        e.preventDefault();
        let article = this.state.article;
        let temparticles = this.state.articles;
        temparticles.push(article);
        this.setState({ articles: temparticles, article: { ...this.state.article, id: "", title: "", content: "" } });
    }


    render() {
        return (

            <div className="container">
                <div className="row">
                    Create Article
                </div>
                <div>
                <form onSubmit={(e) => this.saveData(e)}>
                    <div className="mb-3 row">
                        <label for="id" className="col-sm-2 col-form-label">ID</label>
                        <div className="col-sm-10">
                            <input type="text" readonly className="form-control" id="id" value={this.state.article.id} onChange={(event) => this.onIdChange(event)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="title" className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" value={this.state.article.title} onChange={(event) => this.onTitleChange(event)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="content" className="col-sm-2 col-form-label">Content</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="content" value={this.state.article.content} onChange={(event) => this.onContentChange(event)} />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
                </div>
                <div className="row">
                <ArticleList articles={this.state.articles} />
                </div>
            </div>

        )
    }
}

export default Article
