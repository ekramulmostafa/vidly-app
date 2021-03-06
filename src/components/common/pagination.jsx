import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const Pagination = props => {
  const { count, pageSize, currentPage, onPageChange } = props

  const pagesCount = Math.ceil(count / pageSize)
  const pages = _.range(1, pagesCount + 1)

  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination'>
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? 'page-item active' : 'page-item'}
          >
            <a className='page-link' onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
Pagination.prototype = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
}
export default Pagination
