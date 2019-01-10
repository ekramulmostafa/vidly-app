import React, { Component } from 'react'

class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn }
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc'
    } else {
      sortColumn.path = path
      sortColumn.order = 'asc'
    }

    this.props.onSort(sortColumn)
  }

  renderedIcon = column => {
    const { sortColumn } = this.props
    if (column.path !== sortColumn.path) return null
    if (sortColumn.order === 'asc') return <i className='fa fa-sort-asc' />
    return <i className='fa fa-sort-desc' />
  }
  render () {
    return (
      <thead>
        <tr>
          {this.props.columns.map((c, index) => (
            <th
              className='clickable'
              key={index}
              onClick={() => this.raiseSort(c.path)}
            >
              {c.label} {this.renderedIcon(c)}
            </th>
          ))}
        </tr>
      </thead>
    )
  }
}

export default TableHeader
