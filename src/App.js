import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  //state : 컴포넌트 내부에서 선언하며 내부에서 값을 변경 할 수 있다, 리액트 컴포넌트 안에 있는 Object이다.
  state = {
  }

  componentDidMount(){
    setTimeout(() => {  // = setTimeout(function() {  컴포넌트가 mount되면 3초를 기다리고, movies 내용 추가
      this.setState({
        movies: [
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
          },
          {
            title: "Trainspotting",
            poster: "https://resizing.flixster.com/Yqx4Y2kFbZGsvo4vc_VQaamlPiw=/300x300/v1.bjs1NTQ3OTM7ajsxNzg3MTsxMjAwOzIwMDA7MTMzMQ"
          }
        ]
      })
    }, 3000) //3초
  }

  _renderMovies = () => {   // 함수앞에 _ 붙이는 이유 : 리액트 자체 함수가 많기 때문에 자신이 만든 함수랑 구분 짓기 위해서임
    const movies = this.state.movies.map((movie, index) =>{  // key값으로 index를 준다. index 0부터 시작
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  // 컴포넌트가 리액트 세계에 '존재'하게 되었음을 알게되었다.
  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'} {/*찾고 있는 데이터(this.state.movies)가 있는지 확인 */}
      </div>
    );
  }
}

export default App;
