import React from 'react';
import { Link } from 'react-router-dom';

const AdminMenu = props => {
  return (
    <div className="list-group">
      <Link to="#" className="list-group-item list-group-item-action active">
        Select an option
      </Link>
      <Link to='/admin/portfolio' className="list-group-item list-group-item-action">Portfolio</Link>
      {/* <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
      <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
      <a href="#" className="list-group-item list-group-item-action disabled">Vestibulum at eros</a> */}
    </div>
  )
}

export default AdminMenu;