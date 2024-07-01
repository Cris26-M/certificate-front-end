import React from 'react'

/**
 * componente Header
 * @function Header
 * @param {object} props - props para el componente
 * @param {string} props.title - titulo del componente
 * @param {string} [props.subtitle] - subtitulo opcional del componente 
 * @returns {JSX.Element} - componente Header
 */

export const Header = ({title, subtitle}) => {
  return (
    <header>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
    </header>
  )
}
