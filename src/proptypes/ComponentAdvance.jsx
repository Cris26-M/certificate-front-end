import React from 'react'
import PropTypes from 'prop-types'

export const ComponentAdvance = ({list, title}) => {
  return (
    <div>
        <p>{title}</p>
        <ul>
            {list.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
    </div>
  )
}

ComponentAdvance.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(
    {id: PropTypes.number,
    name: PropTypes.string}
  )).isRequired,
  title: PropTypes.string.isRequired
}
