import React, { Component } from 'react';
import './App.scss';
import CommentList from "./CommentList";

import AdminMode from "./AdminMode";
import CommentForm from "./CommentForm";

import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = { 
    isAdmin: false,
    comments: []
   }

  addComment = (name, message) => {
    let newComment = {
      id: uuidv4(),
      name: name,
      message: message
    }
    this.setState({
      comments: [...this.state.comments,newComment]
    })
  }

  deleteComment = (id) => {
      let comments = this.state.comments.filter(comment => comment.id !== id);
      this.setState({
          comments: comments
        })   
  }

  changeMode = () => {
    this.setState({
      isAdmin : !this.state.isAdmin
    }) 
  }

  render() { 

    return ( 
      <div className="App container">

        <AdminMode isAdmin={this.state.isAdmin} changeMode={this.changeMode}/>
        <div className="columns">
          <CommentForm addComment={this.addComment} />

          <CommentList comments={this.state.comments} deleteComment={this.deleteComment} isAdmin={this.state.isAdmin}/>
        </div>
      </div>
     );
  }
}
 
export default App;


// isAdmin dans le state de l'app pour qu'on y accède dans AdminMode et dans commentList ?
// comment y accèder 