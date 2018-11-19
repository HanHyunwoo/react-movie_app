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
  render() {
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
