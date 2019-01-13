import React, { Component } from 'react'
import Table from './common/table'
// import TableHeader from './common/tableHeader'
// import TableBody from './common/tableBody'
import Like from './common/like'
import { Link } from 'react-router-dom'

class MoviesTable extends Component {
  state = {}

  columns = [
    {
      path: 'title',
      label: 'Title',
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: movie => (
        <Like liked={movie.liked} likeEvent={() => this.props.onLike(movie)} />
      )
    },
    {
      key: 'delete',
      content: movie => (
        <button
          className='btn btn-danger'
          onClick={() => this.props.onDelete(movie._id)}
        >
          Delete
        </button>
      )
    }
  ]

  render () {
    const { movies, onSort, sortColumn } = this.props
    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    )
  }
}

export default MoviesTable
