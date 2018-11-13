import React, { Component } from 'react';


class Blog extends Component {

  render() {
    return (
      <div className="text-secondary font-weight-bold">
        <ul>
            <li>
            <h5>{this.props.details.name}</h5>
            <small>{this.props.details.value}</small>
            </li>
        </ul>
      </div>
    );
  }
}
 
export default Blog;