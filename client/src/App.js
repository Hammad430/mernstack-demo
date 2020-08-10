import React from 'react';
import  axios from 'axios';
import './styles.css';

class App extends React.Component{

  state = {
    title:'',
    body:'',
    posts: []
  };

  componentDidMount = () => {
    this.getBlogPost();
  };

  //retreive data from mongodb through server and output on react client
  getBlogPost = () => {
    axios.get('/api')
      .then((response) =>{
        const data = response.data;
        this.setState({posts: data});
        console.log('Data has been received!');
      })
      .catch(() =>{
        alert('Error receiving data!');
      });
  };
  
  //refactor handle change
  handleChange = ({target}) =>{
    const{name, value} = target;
    this.setState({ [name]: value});
  };

  // handleChange = (event) =>{
  //   const target = event.target;
  //   const name = target.name;
  //   const value = target.value;

  //   this.setState({
  //     [name]: value 
  //   });

  // };

  submit = (event) =>{
    event.preventDefault(); //disablee the browser behaviour

    const payload = {
      title: this.state.title,
      body: this.state.body
    };

    axios({
      url:'/api/save',
      method:'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server!');
        this.resetUserInputs();
        this.getBlogPost();
      })
      .catch(() => {
        console.log('Internal server error!');
      });;
  };

  resetUserInputs = () => {
    this.setState({
      title:'',
      body:''
    });
  };

  displayBlogPost = (posts) => {
    if(!posts.length) return null;

    //loop over each post to display all posts
    //.map is used for looping
    //index and key is used  to identify  individual post in loop
    return posts.map((post,  index) => (
      <div key={index} className="blog-post_display">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
  };

  render(){

    console.log('State: ', this.state);

    //JSX
    return(
      <div className="app">
        <h2>Welcome to my First MERN stack App</h2>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input 
              type="text"
              name="title"
              value={this.state.title}
              placeholder="Title" 
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <textarea 
              name="body" 
              placeholder="body" 
              cols="30" r
              ows="10" 
              value={this.state.body} 
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button>Submit</button>
        </form>
        <div className="blog-post">
          {this.displayBlogPost(this.state.posts)}
        </div>
      </div>
    );
  }
}

export default App;