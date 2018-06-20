import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


// 모든 컴포넌트는 render function을 가지고 있다
// render은 뭔가 보여주고 출력하는 기능
// jsx 리액트로 작성하는 html
class App extends Component {

  constructor(props) {
    super();
    console.log("1");
    console.log("5");
  }
  // Render : componentWillMount() -> render() -> componentDidMount()
  // 원하든 원하지 않든 이 싸이클은 자동으로 발생
  // 위의 세가지는 컴포넌트가 '존재'하기 시작할때 작동

  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate -> render() -> componentDidUpdate
  // 컴포넌트가 새로운 props를 받음 -> old props, new props비교후, 업데이트=true ->

  // 모든 컴포넌트가 state를 가지고 있는 건 아님
  // dumb component smart component
  state = { // component를 로드하는 방법
    
  }

  componentWillMount() {
    console.log("2");
  }

  componentDidMount() {
    console.log("3");
    /*
    fetconsole.log('did mount')
    setTimeout(() => {
      // state를 변경할 때에는 setState을 설정하고, 업데이트할때마다 render가 작동한다(새로운 state와 함꼐)
      this.setState({
        movies : [
          {
            title : "Matrix",
            poster : "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
          },
          {
            title : "Full Metal Jacket",
            poster : "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
          },
          {
            title : "Oldboy",
            poster : "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg"
          },
          {
            title : "Star Wars",
            poster : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/500px-Star_Wars_Logo.svg.png"
          }
        ]
      })
    }, 5000)*/
    // mount 되면 url을 가져올 수 있음
    // promise 새로운 자바스크릡트 컴셉
    this._getMovies();
  }

  // react에는 자체 기능이 많기 때문에 내가 만든 function을 구분하기 위해 언더바를 씀
  // 컴포넌트의 key는 인덱스를 사용하면 느려지기 때문에 비추
  _renderMovies = () => {
     const movies = this.state.movies.map(movie => {
      console.log(movie)
      return <Movie key={movie.id} 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        genres={movie.genres} 
        synopsis={movie.synopsis}
        />
    })
    return movies
  }

  // async를 안쓰면 await을 쓸 수 없음
  _getMovies = async () => {
    // await : this._callApi()가 끝나기를 기다림(성공적인 수행이 아닌)
    const movies = await this._callApi()
    // setState는 _callApi()가 끝나기 전에는 실행되지 않을 것임
    this.setState({
      // _callApi의 return value
      movies
    })
  }

  _callApi = () => {
    // fetch : url을 ajax로 불러올 수 있으니까 좋음
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }
  
  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading...'}   
      </div>
    );
  }
}

export default App;
