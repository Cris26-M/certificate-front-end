import React from 'react'
import PropTypes from 'prop-types'

export default function ComponentBasic({texto, numero, data, arrayOfNumbers}) {
  return (
    <>
    <div>{texto}</div>
    <div>{numero}</div>
    <div>{data}</div>
    <div>{JSON.stringify( arrayOfNumbers)}</div>
    </>
  )
}

ComponentBasic.propTypes = {
  texto: PropTypes.string.isRequired,
  numero: PropTypes.number,
  data: PropTypes.bool,
  arrayOfNumbers: PropTypes.arrayOf(PropTypes.number)
}
