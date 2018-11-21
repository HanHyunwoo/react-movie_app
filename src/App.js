import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  //state : 컴포넌트 내부에서 선언하며 내부에서 값을 변경 할 수 있다, 리액트 컴포넌트 안에 있는 Object이다.
  state = {}
  // componentDidMount(){
  //   setTimeout(() => {  // = setTimeout(function() {  컴포넌트가 mount되면 3초를 기다리고, movies 내용 추가
  //     this.setState({
  //       movies: [
  //         {
  //           title: "Matrix",
  //           poster: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
  //         },
  //         {
  //           title: "Full Metal Jacket",
  //           poster: "https://images-na.ssl-images-amazon.com/images/I/41MN0ANVJTL.jpg"
  //         },
  //         {
  //           title: "Oldboy",
  //           poster: "https://www.nautiljon.com/images/asian-movie/00/23/old_boy_132.jpg"
  //         },
  //         {
  //           title: "Star Wars",
  //           poster: "https://vignette.wikia.nocookie.net/starwars/images/c/c5/Lego-all-stars-promo.jpg/revision/latest?cb=20181026172220"
  //         },
  //         {
  //           title: "Trainspotting",
  //           poster: "https://resizing.flixster.com/Yqx4Y2kFbZGsvo4vc_VQaamlPiw=/300x300/v1.bjs1NTQ3OTM7ajsxNzg3MTsxMjAwOzIwMDA7MTMzMQ"
  //         }
  //       ]
  //     })
  //   }, 3000) //3초
  // }

  // https://yts.am/api(YTS토렌트 영화)에서 데이터베이스를 가져올거임
  componentDidMount(){
    this._getMovies(); // 이렇게 쓰는 이유는 사이즈가 크면 좋은 코딩방법이 아니다. 왜냐면 많은 function을 불러올건데 몰아있는것보다 분기 된 것이 좋다
  }

  _renderMovies = () => {   // 함수앞에 _ 붙이는 이유 : 리액트 자체 함수가 많기 때문에 자신이 만든 함수랑 구분 짓기 위해서임
    const movies = this.state.movies.map(movie =>{  // key값으로 index를 준다. index 0부터 시작
      //console.log(movie)
      // 이전까지는 movie오브젝트를 만들었지만 json data에 맞게끔 이름 변경. 그리고 key를 index에서 id로 변경. 컴포넌트 key를 인덱스로 사용하면 느려서 좋지 않다.
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
    })
    return movies
  }

  _getMovies = async () => { // async비동기= 이전작업이 끝날때까지 기다리는 것이 아니다. async를 안쓰면 await가 작동하지 않는다.
    const movies  = await this._callApi()  // await는 성공적인 수행이 아니라 단지 끝나기를 기다리는 거다. _callApi가 완료되지 않으면 다음줄 실행되지 않는다.
    this.setState({
      movies   // <- 요즘 자바스크립트..  = movies : movies
    })
  }

  _callApi = () => {  // _callApi는 fetch Promises를 리턴할거라서 fetch 앞에 return 을 붙인다.
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count') // fetch : url을 AJAX로 간단하게 불러올 수 있어서 좋음
    // then()은 위의 작업이 성공적인 수행이 아니더라도 작업이 완료되면, then()을 불러온다. then() 다음에 .catch()를 생성하고 error를 출력해라. (Promises)
    // .then(response => console.log(response))  // response 이름은 자유롭게 작명가능, 콘솔에서 보면 body가 ReadableStream으로 되어있다.이것은 2진수이며 JSON형식으로 바꿔야한다.
    .then(response => response.json())  // then function은 1개의 attribute만 있다.
    //.then(json => console.log(json))
    .then(json => json.data.movies) // 바로 윗줄 콘솔로그를 개발도구로 보면 json데이터에 data안에 movies값이 있다. 이것을 리턴한다.
    .catch(err => console.log(err)) // = .catch(function(err){console.log(err)}) 위의 라인에 에러가 있으면 error를 보여줘라
  }

  // 컴포넌트가 리액트 세계에 '존재'하게 되었음을 알게되었다.
  render() {
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : 'Loading'} {/*찾고 있는 데이터(this.state.movies)가 있는지 확인 */}
      </div>
    );
  }
}

export default App;
