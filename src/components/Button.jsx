import React from 'react'

/**
 * componente de boton reutilizable
 * @function Button
 * @param {object} props - props para el componente
 * @param {React.ReactNode} props.children - contenido del boton 
 * @returns {JSX.Element}
 */

export const Button = ({children}) => {
  return (
    <button>{children}</button>
  )
}
