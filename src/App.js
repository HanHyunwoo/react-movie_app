import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// const movieTitles = [
//   "Matrix",
//   "Full Metal Jacket",
//   "Oldboy",
//   "Star Wars"
// ]

// const movieImages = [
//   "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
//   "https://images-na.ssl-images-amazon.com/images/I/41MN0ANVJTL.jpg",
//   "https://www.nautiljon.com/images/asian-movie/00/23/old_boy_132.jpg",
//   "https://vignette.wikia.nocookie.net/starwars/images/c/c5/Lego-all-stars-promo.jpg/revision/latest?cb=20181026172220"
// ]

const movies = [
  {
    title: "Matrix",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster: "https://images-na.ssl-images-amazon.com/images/I/41MN0ANVJTL.jpg"
  },
  {
    title: "Oldboy",
    poster: "https://www.nautiljon.com/images/asian-movie/00/23/old_boy_132.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://vignette.wikia.nocookie.net/starwars/images/c/c5/Lego-all-stars-promo.jpg/revision/latest?cb=20181026172220"
  }

]

class App extends Component {

  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  // 컴포넌트가 새로운 props를 받았다.
  componentWillReceiveProps(){}

  // 리액트는 old props, 새로운 props를 살펴보고 props가 다르면 리액트는 '업데이트==true'라고 생각한다.
  shouldComponentUpdate(){}

  // 업데이트를 한다. 예를 들어 어플리케이션에 '빙긍빙글 돌아가는 spinner'를 붙일 수가 있다.
  componentWillUpdate(){}

  // 업데이트 이후에는 돌고 있던 '로딩 중'메시지나 아이콘을 숨긴다.
  componentDidUpdate(){}


//----------------------------------------------------------------------------------

  // 컴포넌트 싸이클이 시작되었다
  componentWillMount(){
    console.log('will mount')
  }

  // 컴포넌트가 성공적으로 리액트 세계에 자리 잡았음을 알게되었다.
  componentDidMount(){
    console.log('did mount')
  }

  // 컴포넌트가 리액트 세계에 '존재'하게 되었음을 알게되었다.
  render() {
    console.log('did render')
    return (
      <div className="App">

         {/*
         <Movie title={movieTitles[0]} poster={movieImages[0]} />
         <Movie title={movieTitles[1]} poster={movieImages[1]} />
         <Movie title={movieTitles[2]} poster={movieImages[2]} />
         <Movie title={movieTitles[3]} poster={movieImages[3]} />
         */}

         {movies.map((movie, index) =>{  // key값으로 index를 준다. index 0부터 시작
           return <Movie title={movie.title} poster={movie.poster} key={index} />
         })}

         {/*
         <Movie title={movies[0].title} poster={movies[0].poster} />
         <Movie title={movies[1].title} poster={movies[1].poster} />
         <Movie title={movies[2].title} poster={movies[2].poster} />
         <Movie title={movies[3].title} poster={movies[3].poster} />
         */}

      </div>
    );
  }
}

export default App;
