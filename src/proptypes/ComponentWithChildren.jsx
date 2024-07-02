import React from 'react'
import PropTypes from 'prop-types'


export const ComponentWithChildren = ({title, children}) => {
  return (
    <div>
        <h1>{title}</h1>
        <div>
            {children}
        </div>
    </div>
  )
}

ComponentWithChildren.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
