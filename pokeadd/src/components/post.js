import React from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import {deletePost} from '../actions/postActions'

class Post extends React.Component {
    handleClick=()=>{
        this.props.delete(this.props.post.id);
        this.props.history.push('/');
    }
    render() {
        console.log(this.props);
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        DELETE POST
                    </button>
                </div>
            </div>
        ) : (
                <div className="center">Loading . . .</div>
            )
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        delete:(id)=>{dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);