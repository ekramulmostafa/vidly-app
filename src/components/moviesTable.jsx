import React, { Component } from 'react'
import Table from './common/table'
import TableHeader from './common/tableHeader'
import TableBody from './common/tableBody'
import Like from './common/like'

class MoviesTable extends Component {
  state = {}

  columns = [
    { path: 'title', label: 'Title' },
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
      <table className='table'>
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        {/* <thead>
          <tr>
            <th>Title</th>
            <th onClick={() => this.raiseSort('genre.name')}>Genre</th>
            <th onClick={() => this.raiseSort('numberInStock')}>Stock</th>
            <th onClick={() => this.raiseSort('dailyRentalRate')}>Rate</th>
            <th />
            <th />
          </tr>
        </thead> */}
        <TableBody data={movies} columns={this.columns} />
        {/* <tbody>
          {movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} likeEvent={() => onLike(movie)} />
              </td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => onDelete(movie._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    )
  }
}

export default MoviesTable
