import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
  render(){
    return(
      <div>
        <MoviePoster />
        <h1>hello this is a movie</h1>
      </div>
    )
  }
}

class MoviePoster extends Component{
  render(){
    return(
      <img src="http://blogpfthumb.phinf.naver.net/MjAxNzEwMDhfMjE2/MDAxNTA3NDA4MzMzNzQw.7Vml0qN_E3U_5g3ABJUWIIoeM3Abs3qwZ77qbKBNHysg.Azn5caoiQiD51kJp90xyJMFi5YVlRiKkyCCLu28-hJsg.JPEG.hhw1990/%BB%E7%C1%F8.jpg?type=w161" />
    )
  }
}

export default Movie
