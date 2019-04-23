import React, { Component } from 'react';
import config, { storage } from './../firebase-config';

class AdminPortfolio extends Component {
  constructor(props) {
    super(props);
    this.recordPortfolio = this.recordPortfolio.bind(this);
  }

  recordPortfolio(event) {
    event.preventDefault();
    console.log('To aqui !!!!!!!!!!!!!');
    console.log(this.title.value);
    console.log(this.description.value);
    console.log(this.image.value);

    const file = this.image.files[0];
    const { name, size, type } = file;
    
    console.log(name, size, type);
    
    const ref = storage.ref(name);
    ref.put(file).then(img => {
      img.ref.getDownloadURL().then(downloadURL => {
        console.log(downloadURL);
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Portfolio - Area administrativa</h2>
        <form onSubmit={this.recordPortfolio}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" placeholder="Title" ref={(ref) => this.title = ref} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" id="description" rows="3" ref={(ref) => this.description = ref}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image File</label>
            <input type="file" className="form-control-file" id="image" ref={(ref) => this.image = ref} />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default AdminPortfolio;