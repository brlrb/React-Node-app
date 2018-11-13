import React from 'react';
import axios from 'axios';

import './css/App.css';
import Header from './components/Header';
import Post from './components/Post';
import Blog from './components/Blog';

class App extends React.Component {

  state = {
    posts: {}
  }


  componentDidMount() {
    axios.get(`http://localhost:7777/all`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })

      console.log("posts: ", this.state.posts)
      console.log("**** component DID mounted ****")
  }



  addPost = singlePost =>{
    // take a copy of current posts
    const posts = {...this.state.posts};

    // add our new blog post to the current state
    posts[`post${Date.now()}`] = singlePost;

    this.setState({
      posts
    })
  }



 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Post addPost={this.addPost}/>


        <ul>
              {Object.keys(this.state.posts).map(key => 
                  <Blog 
                    key={key} 
                    details = {this.state.posts[key]}/>
                )}
            </ul>

      </div>
    );
  }
}

export default App;
