import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

/*class Movie extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        genres : PropTypes.array.isRequired,
        synopsis: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="Movie">
                <div className="Movie__Columns">
                    <MoviePoster poster={this.props.poster} />
                </div>
                <div className="Movie__Columns">
                    <h1>{this.props.title}</h1>
                    <div className="Movie__Genres">
                    
                    </div>
                </div>
                
                    
            </div>
        )
    }
}*/

/*class MoviePoster extends Component {

    static propTypes = {
        poster: PropTypes.string.isRequired
    }

    render() {
        console.log(this.props);
        return (
            <img src={this.props.poster} />
        )
    }
}*/

function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>   
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />   
                </div>
            </div>
        </div>
    )
}

// 이들은 state가 없음
// function render도 없고 라이프 사이클도 없음
function MoviePoster({poster, alt}) {
    return ( 
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

function MovieGenre({genre}) {
    return(
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired, 
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre : PropTypes.string.isRequired
}

export default Movie