import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
  render(){
    {/*console.log(this.props); */}

    return(
      <div>
        <MoviePoster poster={this.props.poster}/>
        <h1>{this.props.title}</h1> { /*JSX의 경우 명령을 실행시키려면 중괄호를 꼭 쳐야한다. */}
      </div>
    )
  }
}

class MoviePoster extends Component{
  render(){
    {/*console.log(this.props); */}
    return(
      <img src={this.props.poster} alt="img" />
    )
  }
}

export default Movie
