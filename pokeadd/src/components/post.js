import React from 'react';

class Post extends React.Component{
    state={
        id:null
    }
    componentDidMount(){
        let id =this.props.match.params.post_id;
        this.setState({
            id:id
        })
    }
    render(){
        return(
            <div>
            <h1>{this.state.id}</h1>
            </div>
        )
    }
}

export default Post;