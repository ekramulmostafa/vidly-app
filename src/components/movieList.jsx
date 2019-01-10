import React, { Component } from 'react'
import Pagination from './common/pagination'
import { paginate } from '../utils/paginate'
import ListGroup from './common/listGroup'
import MoviesTable from './moviesTable'
import { getMovies, deleteMovie } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import _ from 'lodash'

class MovieList extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    selectedGenre: null,
    sortColumn: {
      path: 'title',
      order: 'asc'
    }
    // movies: ''
  }

  componentDidMount () {
    const genres = [{ name: 'All Genre' }, ...getGenres()]
    this.setState({ movies: getMovies(), genres })
  }

  handleLike = movie => {
    // console.log(movie)
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    // movies[index] = { ...movies[index] }
    movies[index].liked = !movies[index].liked

    this.setState({ movies })
  }

  handlePageChange = page => {
    // console.log(page)
    this.setState({ currentPage: page })
  }

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 })
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn })
  }

  getMovieList = () => {
    // console.log(this.state.movies)

    if (this.state.movies.length === 0) return <p>There is no movie list</p>

    const filtered =
      this.state.selectedGenre && this.state.selectedGenre._id
        ? this.state.movies.filter(
          m => m.genre._id === this.state.selectedGenre._id
        )
        : this.state.movies

    const sorted = _.orderBy(
      filtered,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    )

    const movies = paginate(sorted, this.state.currentPage, this.state.pageSize)
    return (
      <div className='row'>
        <div className='col-3'>
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className='col'>
          <div>Showing {filtered.length} movies in the database</div>
          <MoviesTable
            movies={movies}
            sortColumn={this.state.sortColumn}
            onLike={this.handleLike}
            onDelete={this.removeMovie}
            onSort={this.handleSort}
          />
          <Pagination
            count={filtered.length}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
          />
        </div>
      </div>
    )
    // console.log(getMovies)
  }
  removeMovie = id => {
    // console.log(id)
    console.log(deleteMovie(id))

    this.setState({ movies: getMovies() })
  }
  render () {
    return (
      <main className='container'>
        <h1>Movie Lists</h1>

        <div>{this.getMovieList()}</div>
      </main>
    )
  }
}

export default MovieList
