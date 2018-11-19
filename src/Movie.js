import React, { Component } from 'react';
import PropTypes from 'prop-types'; // node에서 yarn add prop-types 설치하고 import
import './Movie.css';

class Movie extends Component{

  // 부모 컴포넌트로부터 받는 데이터 타입 설정 ,
  // isRequired : movie컴포넌트는 title이라는 prop을 제공하는 것이 필수이다.
  // App.js(부모)가 title={movie.title} 제공 안해주면 워링 뜸
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }

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
  // 여기서는 MoviePoster의 부모(Movie) 컴포넌트에게서 받는 정보를 체크하는 거임
  // poster의 type은 string이고, 필수요건이다.
  static propTypes = {
    poster: PropTypes.string.isRequired
  }

  render(){
    {/*console.log(this.props); */}
    return(
      <img src={this.props.poster} alt="img" />
    )
  }
}

export default Movie
