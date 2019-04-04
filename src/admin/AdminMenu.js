import React from 'react';

const AdminMenu = props => {
  return (
    <div className="list-group">
      <a href="#" className="list-group-item list-group-item-action active">
        Select an option
      </a>
      <a href="#" className="list-group-item list-group-item-action">Portfolio</a>
      {/* <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
      <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
      <a href="#" className="list-group-item list-group-item-action disabled">Vestibulum at eros</a> */}
    </div>
  )
}

export default AdminMenu;