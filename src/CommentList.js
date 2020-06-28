import React, { Component } from 'react';

class CommentList extends Component {


    render() { 
        let classButton = "";
        this.props.isAdmin ? classButton = "delete" : classButton = "delete is-invisible" ;

        let commentsList = this.props.comments.map(comment => {
            return <li key={comment.id}><strong>{comment.name}</strong> <br/> {comment.message} 
            <button onClick={()=>this.props.deleteComment(comment.id)} className={classButton}></button></li> 
         })

        return (
            <div className="column">
                    <h1 className="title">Liste des commentaires ({this.props.comments.length})</h1>
                    <ul className="comment-list">
                    {commentsList}
                    </ul>
                
            </div>
          );
    }
}


export default CommentList;