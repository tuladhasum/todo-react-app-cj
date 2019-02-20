import React, {Component} from 'react';
import Request from 'react-http-request';

class CommentForm extends React.Component{
  render(){
    return(
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" />
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    );
  }
}

class Comment extends React.Component {
  _getData(){
    const comments = [
      {
        id: 1,
        name: 'Sumit Tuladhar',
        body: 'this is a first comment of the day'
      },
      {
        id: 2,
        name: 'Monkey Pandey',
        body: 'this is a monkey business'
      }
    ];

    return comments.map(
      (comment) => {
        return (
          <div className="media">
            <div className="media-body">
              <h5 className="mt-0">{comment.name}</h5>
              {comment.body}
            </div>
          </div>
        );
      }
    );
  }

  _getGithub(){
    return(
      <Request
        url='https://api.github.com/users/tuladhasum'
        method='get'
        accept='application/json'
        verbose={true}
      >
      {
         ({error, result, loading}) => {
           if (loading) {
             return <div>loading...</div>;
           } else {``
             return (
               <div><code>{ JSON.stringify(result) }</code></div>
             );
           }
         }
       }
      </Request>
    );
  }
  render(){
    const comments = this._getData();
    const github = this._getGithub();
    return(
      <div>
        <CommentForm />
        {comments}
        {/* {github} */}
      </div>
    );
  }
}

export default Comment;
