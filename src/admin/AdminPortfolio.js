import React, { Component } from 'react';
import config, { storage } from './../firebase-config';

class AdminPortfolio extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Portfolio - Area administrativa</h2>
        <form>
          <div className="form-group">
            <label for="title">Title</label>
            <input type="text" className="form-control" id="title" placeholder="Title" />
          </div>
          <div className="form-group">
            <label for="description">Description</label>
            <textarea class="form-control" id="description" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label for="image">Image File</label>
            <input type="file" class="form-control-file" id="image" />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default AdminPortfolio;