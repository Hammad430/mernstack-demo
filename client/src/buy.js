import React from 'react';
import  axios from 'axios';
import './styles.css';
import { Jumbotron } from 'reactstrap';

class buy extends React.Component{

  state = {
    posts: []
  };

  componentDidMount = () => {
    this.getBlogPost();
  };

  //retreive data from mongodb through server and output on react client
  getBlogPost = () => {
    axios.get('/api/listings')
      .then((response) =>{
        const data = response.data;
        console.log(data);
        this.setState({posts: data});
        console.log('Data has been received!');
      })
      .catch(() =>{
        alert('Error receiving data!');
      });
  };
  
  displayBlogPost = (posts) => {
    if(!posts.length) return null;

    //loop over each post to display all posts
    //.map is used for looping
    //index and key is used  to identify  individual post in loop
    return posts.map((post,  index) => (
      <div key={index} className="listingDiv">
        <Jumbotron>
        <h1 className="display-5">{post.shedName}</h1>
        <p className="lead">Selling Rate: {post.sellRate} /Kg</p>
        <hr className="my-2" />
        <p>Address: {post.address}</p>
        <p>Contact No: {post.contact}</p>
        <p>City: {post.city}</p>
        <p>Region: {post.region}</p>
      </Jumbotron>
      </div>
    ));
  };

  render(){

    //JSX
    return(
      <div>
        {this.displayBlogPost(this.state.posts)}
      </div>
    );
  }
}

export default buy;