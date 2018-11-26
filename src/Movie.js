// import React, { Component } from 'react';   functional컴포넌트로 변경했기 때문에 component 삭제
import React from 'react';
import PropTypes from 'prop-types'; // node에서 yarn add prop-types 설치하고 import
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

var rank=0;

// class Movie extends Component{   // smart컴포넌트와 dumb컴포넌트의 차이는 state가 있고 없고 차이이다.
//   // 부모 컴포넌트로부터 받는 데이터 타입 설정 ,
//   // isRequired : movie컴포넌트는 title이라는 prop을 제공하는 것이 필수이다.
//   // App.js(부모)가 title={movie.title} 제공 안해주면 워링 뜸
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
//   }
//
//   render(){
//     {/*console.log(this.props); */}
//     return(
//       <div>
//         <MoviePoster poster={this.props.poster}/>
//         <h1>{this.props.title}</h1> { /*JSX의 경우 명령을 실행시키려면 중괄호를 꼭 쳐야한다. */}
//       </div>
//     )
//   }
// }

// 위의 class Movie컴포넌트를 functional컴포넌트로 변경
function Movie({title, poster, genres, synopsis}){  // props이름을 title, poster라고 지음,
  return (
    <div className="Movie">
        <div className="Movie__Column">
            <MoviePoster poster={poster} alt={title}/>  {/* class가 아니니까 this.props.poster가 아님, functional컴포넌트에선 this props를 삭제해야 함 */}
        </div>
        <div className="Movie__Column">
            <h1>{MovieRank()}. {title}</h1> {/* JSX의 경우 명령을 실행시키려면 중괄호를 꼭 쳐야한다. */}
            <div>Genre</div>
            <div className="Movie__Genres">
                {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
            </div>
            <div>Content</div>
            <div className="Movie__Synopsis">
            <LinesEllipsis
                text={synopsis}
                maxLine='5'
                ellipsis='...'
                trimRight
                basedOn='letters'
                />
            </div>
        </div>
    </div>
  )
}

// class MoviePoster extends Component{  //아래에 작성한 stateless functional component와 같음
//   // 여기서는 MoviePoster의 부모(Movie) 컴포넌트에게서 받는 정보를 체크하는 거임
//   // poster의 type은 string이고, 필수요건이다.
//   static propTypes = {
//     poster: PropTypes.string.isRequired
//   }
//
//   render(){
//     {/*console.log(this.props); */}
//     return(
//       <img src={this.props.poster} alt="img" />
//     )
//   }
// }

// 이 component는 component will mount, function, update state, .. 필요가 없음, 한개의 props만 있으면 됨
// 단지 return을 하기위해 존재함. 그리고 state가 없다는 것을 기억~!!! 그리고 function render와 라이프사이클도 없음!!
function MoviePoster({poster, alt}){   // stateless functional component = dumb컴포넌트 임
  return (
    <img src={poster} alt={alt} title={alt} className="Movie__Poster"/> // function 컴포넌트는 클래스가 아니기 때문에 this.props. 지우고 poster만 남김
  )
}

function MovieGenre({genre}){
  return (
    <span className="Movie__Genre">{genre}</span>
  )
}

function MovieRank(){
  rank++;
  return rank //(<span className="Movie__Rank">{rank}</span>)
}

// Movie컴포넌트 prop types 확인방법
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
}

// MoviePoster컴포넌트 prop types 확인방법
MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}


export default Movie
