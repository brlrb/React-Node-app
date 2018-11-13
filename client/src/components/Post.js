import React from 'react';
import '../css/App.css';

class Post extends React.Component {
    postNameRef = React.createRef();
    isPublishedRef = React.createRef();
    descriptionRef = React.createRef();
    keywordsRef = React.createRef();

    createPost = event => {
        // Stop the form from reloading the page
        event.preventDefault();

        const singlePost = {
            postName: this.postNameRef.current.value,
            isPublished: this.isPublishedRef.current.value,
            description: this.descriptionRef.current.value,
            keywords: this.keywordsRef.current.value,
        };
        this.props.addPost(singlePost);
        console.log(singlePost);
        
        // refresh the form value
        event.currentTarget.reset();
    }




  render() {
    return (
        <div className="col-md-6 card card-body">
            <form className="form" onSubmit={this.createPost}>
            
                <div className="form-group">
                <input className = "form-control" name="postName" ref={this.postNameRef} type="text" placeholder="Name" />
                </div>

                <div className="form-group">
                <select name="isPublished" ref={this.isPublishedRef}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                </div>

                <div className="form-group">
                <textarea name="description" className = "form-control" ref={this.descriptionRef} placeholder="Add a description" />
                </div>

                <div className="form-group">
                <input name="keywords"  className = "form-control" ref={this.keywordsRef} type="text" placeholder="Add a keywords" />
                </div>
            
            
            <button className = "form-control" type="submit">Create Post +</button>
        </form>
      </div>
    );
  }
}

export default Post;
