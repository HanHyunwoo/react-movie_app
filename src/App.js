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

  //state : 컴포넌트 내부에서 선언하며 내부에서 값을 변경 할 수 있다, 리액트 컴포넌트 안에 있는 Object이다.
  state = {
    greeting: 'Hello!'
  }

  // 컴포넌트가 mount할 때마다, greeting을 Hello again! 으로 변경한다
  componentDidMount(){
    setTimeout(() => {  //컴포넌트가 mount되면 2초를 기다리고 , greeting를 업데이트 한다.
       this.setState({  // this.state.greeting = 'something'  <- X, state를 직접적으로 써서 변경하면 안됨,
         greeting: 'Hello again!'
       })
    }, 2000) //2초
  }

  // 컴포넌트가 리액트 세계에 '존재'하게 되었음을 알게되었다.
  render() {
    //console.log('did render')
    return (
      <div className="App">
        {this.state.greeting}

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
