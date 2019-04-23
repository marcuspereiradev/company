import React, { Component } from 'react';
import config, { storage } from './../firebase-config';

class AdminPortfolio extends Component {
  constructor(props) {
    super(props);
    this.recordPortfolio = this.recordPortfolio.bind(this);
  }

  recordPortfolio() {
    console.log('To aqui !!!!!!!!!!!!!');
  }

  render() {
    return (
      <div>
        <h2>Portfolio - Area administrativa</h2>
        <form onSubmit={this.recordPortfolio}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" placeholder="Title" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea class="form-control" id="description" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label htmlFor="image">Image File</label>
            <input type="file" className="form-control-file" id="image" />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default AdminPortfolio;