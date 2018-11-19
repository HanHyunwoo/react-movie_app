import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImages = [
  "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41MN0ANVJTL.jpg",
  "https://www.nautiljon.com/images/asian-movie/00/23/old_boy_132.jpg",
  "https://vignette.wikia.nocookie.net/starwars/images/c/c5/Lego-all-stars-promo.jpg/revision/latest?cb=20181026172220"
]


class App extends Component {
  render() {
    return (
      <div className="App">
         <Movie title={movieTitles[0]} poster={movieImages[0]} />
         <Movie title={movieTitles[1]} poster={movieImages[1]} />
         <Movie title={movieTitles[2]} poster={movieImages[2]} />
         <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>
    );
  }
}

export default App;
