import React from 'react'

const ListGroup = props => {
  const { items, textProperty, onItemSelect, selectedItem } = props
  return (
    <ul className='list-group'>
      {items.map((item, index) => (
        <li
          onClick={() => onItemSelect(item)}
          key={index}
          className={
            item === selectedItem ? 'list-group-item active' : 'list-group-item'
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  )
}

ListGroup.defaultProps = {
  textProperty: 'name'
}

export default ListGroup
