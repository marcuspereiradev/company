import React, { Component } from 'react';
import config from '../firebase-config';
import { Link } from 'react-router-dom';
import ItemPortfolio from '../components/ItemPortfolio';

class AdminPortfolioDelete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolio: {},
    }

    config.syncState('portfolio', {
      context: this,
      state: 'portfolio',
      asArray: false,
    })

    this.delete = this.delete.bind(this);
  }

  delete(key) {
    return (event) => {
      event.preventDefault();
      config.remove(`portfolio/${key}`).then(() => {
        console.log('Deleted!');
      })
      .catch(() => {
        console.log('Dont deleted');
      })
    }
  }

  render() {
    return (
      <div>  
        {
          Object.keys(this.state.portfolio).map(key => {
            return <Link to="#" className="portfolio-delete" onClick={this.delete(key)}>
                    <ItemPortfolio key={key} content={this.state.portfolio[key]} />
                  </Link>              
          })
        }
      </div>
    )
  }
}

export default AdminPortfolioDelete;
