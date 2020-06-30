/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import Nav from './Nav'
import SearchArea from './SearchArea'
import MovieList from './MovieList'
import Paginations from './Paginations'
import MovieInfo from './MovieInfo'
// import Modal from '@material-ui/core/Modal';


class App extends Component{
    constructor() {
      super()
      this.state = {
        movies: [],
        searchTerm: '',
        searchYear:'',
        totalResults: 0,
        currentPage: 1,
        currentMovie: null,
        open: false
      }
      // this.apikey = process.env.REACT_APP_API
      // dcbd8779ffa12a05939241fbdd8c40b5
    }

    handleSubmit = (e) => {
      e.preventDefault();

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=dcbd8779ffa12a05939241fbdd8c40b5&query=${this.state.searchTerm}`)
      .then(data => data.json())
      .then(data => {
        console.log(data)
        this.setState({ movies: [...data.results], totalResults: data.total_results}) 
        console.log(this.state.movies)
      })
    } 


    handleChange = (e) => {
      this.setState({ searchTerm: e.target.value })
    }

    // handleChangeYear = (e) => {
    //   this.setState({ searchYear: e.target.value })
    // }


    nextPage = (pageNumber) => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=dcbd8779ffa12a05939241fbdd8c40b5&query=${this.state.searchTerm}&page=${pageNumber}`)
      .then(data => data.json())
      .then(data => {
        this.setState({ movies: [...data.results], currentPage: pageNumber })
      })
    }

    viewMovieInfo = (id) => {
      // const movies = this.state.movies
      const filteredMovie = this.state.movies.filter(movie => movie.id == id)

      const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null

      this.setState({ currentMovie: newCurrentMovie })
    }

    closeMovieInfo = () => {
      this.setState({ currentMovie:null })
    }

    handleOpen = () => {
      this.setState({ open: true });
    }

    handleClose = () => {
      this.setState({open:false});
    }

    render() {
      const numberPages = Math.floor( this.state.totalResults / 20);

      return (
        <div className="App">
          <Nav />
          { this.state.currentMovie == null ? <div><SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/><MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/></div> : <MovieInfo open={this.handleOpen} currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo}/> }
          { this.state.totalResults > 20 && this.state.currentMovie == null ? <Paginations pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : '' } 
        </div>
      );
  }
}

export default App;
