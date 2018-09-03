import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class FeedbackDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details:''
    }
  }

  componentWillMount(){
    this.getFeedback();
  }

  getFeedback(){
    let feedbackId = this.props.match.params.id;

    axios.get(`https://app-fnbtracking-api.herokuapp.com/api/feedbacks/${feedbackId}`)
    .then(response => {
      this.setState({details: response.data}, () =>
      {
        console.log(this.state);
      })
    })
    .catch(err => console.log(err));
  }

  onDelete(){
      let feedbackId = this.state.details.id;
      axios.delete(`https://app-fnbtracking-api.herokuapp.com/api/feedbacks/${feedbackId}`)
      .then(response => {
        this.props.history.push('/');
      }).catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">Back</Link>

        <h3>Feedback details</h3>

        <ul className="collection">
          <li className="collection-item"><b>Flight</b>: {this.state.details.flight}</li>

          <li className="collection-item"><b>Route</b>: {this.state.details.departing} - {this.state.details.arriving}</li>

          <li className="collection-item"><b>Aircraft</b>: {this.state.details.aircraft}</li>
          <li className="collection-item"><b>Pax</b>: {this.state.details.pax}</li>

          <li className="collection-item"><b>Meal #1</b>: {this.state.details.meal1}</li>
          <li className="collection-item"><b>Meal #2</b>: {this.state.details.meal2}</li>
          <li className="collection-item"><b>Meal #3</b>: {this.state.details.meal3}</li>
          <li className="collection-item"><b>Meal #4</b>: {this.state.details.meal4}</li>
        </ul>

        <Link className="btn" to={`/feedbacks/edit/${this.state.details.id}`}>Edit</Link>
        <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
        <br />
      </div>
    )
  }
}

export default FeedbackDetails;
