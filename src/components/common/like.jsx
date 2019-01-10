import React from 'react'
const Like = props => {
  const { liked, likeEvent } = props
  let classes = 'fa fa-heart'
  if (!liked) classes += '-o'
  return (
    <React.Fragment>
      <i
        style={{ cursor: 'pointer' }}
        className={classes}
        aria-hidden='true'
        onClick={likeEvent}
      />
    </React.Fragment>
  )
}

export default Like
