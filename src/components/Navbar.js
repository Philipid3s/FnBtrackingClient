import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
  render(){
    return (
      <div>
      <nav className="blue darken-3">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">F&B Tracking</a>
        <a data-target="main-menu" className="sidenav-trigger"><i className="fa fa-bars"></i></a>

          <ul className="right hide-on-small-only">
            <li><Link to="/"><i className="fa fa-plane"></i> Feedbacks</Link></li>
            <li><Link to="/about"><i className="fa fa-question-circle"></i> About</Link></li>
          </ul>
      </div>
      </nav>

      <ul className="sidenav" id="main-menu">
        <li><Link to="/"><i className="fa fa-plane"></i> Feedbacks</Link></li>
        <li><Link to="/feedbacks/add"><i className="fa fa-plus"></i> Add feedback</Link></li>
        <li><Link to="/about"><i className="fa fa-question-circle"></i> About</Link></li>

      </ul>
      </div>
    )
  }
}

export default Navbar;
