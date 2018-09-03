import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class FeedbackItem extends Component {
  constructor(props) {
    super(props);

    var d = new Date(props.item.datetime*1000)

    this.state = {
      item:props.item,
      date:d.toUTCString()
    }
  }
  render() {
    return (
      <li className="collection-item">
        <Link to={`/feedbacks/${this.state.item.id}`}>
        {this.state.item.flight} {this.state.item.departing}-{this.state.item.arriving} ({this.state.date})
        </Link>
      </li>
    )
  }
}

export default FeedbackItem;
