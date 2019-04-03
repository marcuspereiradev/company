import React from 'react'

const Footer = props => {
  return (
    <footer className='container-fluid text-center'>
      <a href='#myPage' title='To Top'>
        <span className='glyphicon glyphicon-chevron-up'></span>
      </a>
      <p>Bootstrap Theme Made By <a href='https://www.w3schools.com' title='Visit w3schools'>www.w3schools.com</a></p>
      <p>Site created by <a href="https://github.com/marcuspereiradev">Marcus Pereira </a> using ReactJS</p>
    </footer>
  )
}

export default Footer;