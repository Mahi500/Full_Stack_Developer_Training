import React from 'react'


class Article extends React.Component{
    constructor(props){
        
        super(props);

        this.state={

            articles:[],
            article:{
                id: "",
                title:"",
                content:""
            }
        };
    }

    onIdChange(event){
        console.log(event.target.value);
        this.setState({article:{...this.state.article,id:event.target.value}});

    }

    onTitleChange(event){
        console.log(event.target.value);
        this.setState({article:{...this.state.article,title:event.target.value}});
    }

    onContentChange(event){
        console.log(event.target.value);
        this.setState({article:{...this.state.article,content:event.target.value}});
    }

    saveData(e){
        console.log("saving");
        e.preventDefault();
        let article=this.state.article;
        let temparticles=this.state.articles;
        temparticles.push(article);
        this.setState({articles:temparticles,article:{...article,id:"",title:"",content:""}});
    }


    render(){
        return(
             
            <div className="container">
            <div className="row">
                Create Article
            </div>
            <form onSubmit={(e)=>this.saveData(e)}>
            <div className="mb-3 row">
            <label for="id" className="col-sm-2 col-form-label">ID</label>
            <div className="col-sm-10">
            <input type="text" readonly className="form-control" id="id" value={this.state.article.id} onChange={(event)=>this.onIdChange(event)}/>
            </div>
            </div>
            <div className="mb-3 row">
            <label for="title" className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="title" value={this.state.article.title} onChange={(event)=>this.onTitleChange(event)}/>
            </div>
            </div>
            <div className="mb-3 row">
            <label for="content" className="col-sm-2 col-form-label">Content</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="content" value={this.state.article.content} onChange={(event)=>this.onContentChange(event)}/>
            </div>
            </div>
            <div>
            <button type="submit" className="btn btn-primary">Save</button>
            </div>
            </form>
            <h1>Articles Data</h1>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Content</th>
    </tr>
  </thead>
  <tbody>
    {
        this.state.articles.map((item)=>{

            return <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.content}</td>
                </tr>


            
             })

    
    }
  </tbody>
</table>
            </div>
            
        )
    }
}

export default Article
    