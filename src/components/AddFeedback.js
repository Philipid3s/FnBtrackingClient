import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AddFeedback extends Component {

  addFeedback(newFeedback){
    axios.request({
      method:'post',
      url:`https://app-fnbtracking-api.herokuapp.com/api/feedbacks`,
      data: newFeedback
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }

  onSubmit(e){
    let date = new Date().getTime() / 1000;

    const newFeedback = {
      flight: this.refs.flight.value,
      aircraft: this.refs.aircraft.value,
      pax: parseInt(this.refs.pax.value),
      datetime: Math.ceil(date),
      departing: this.refs.departing.value,
      arriving: this.refs.arrival.value,
      meal1: parseInt(this.refs.meal1.value),
      meal2: parseInt(this.refs.meal2.value),
      meal3: parseInt(this.refs.meal3.value),
      meal4: parseInt(this.refs.meal4.value)
    }
    console.log(newFeedback);
    this.addFeedback(newFeedback);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">Back</Link>

        <h3>Add feedback</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input id="flight" type="text" name="flight" ref="flight" />
            <label htmlFor="flight">Flight (ex: "SQ187")</label>
          </div>

          <div className="input-field">
            <input id="aircraft" type="text" name="aircraft" ref="aircraft" />
            <label htmlFor="aircraft">Aircraft (ex: "B777")</label>
          </div>

          <div className="input-field">
            <input id="pax" type="text" name="pax" ref="pax" />
            <label htmlFor="pax">Pax</label>
          </div>

          <div className="input-field">
            <input id="departing" type="text" name="departing" ref="departing" />
            <label htmlFor="departing">Departing (ex: "SIN")</label>
          </div>

          <div className="input-field">
            <input id="arrival" type="text" name="arrival" ref="arrival" />
            <label htmlFor="arrival">Arrival (ex: "HAN")</label>
          </div>

          <div className="input-field">
            <input id="meal1" type="text" name="meal1" ref="meal1" />
            <label htmlFor="meal1">Meal #1</label>
          </div>

          <div className="input-field">
            <input id="meal2" type="text" name="meal2" ref="meal2" />
            <label htmlFor="meal2">Meal #2</label>
          </div>

          <div className="input-field">
            <input id="meal3" type="text" name="meal3" ref="meal3" />
            <label htmlFor="meal3">Meal #3</label>
          </div>

          <div className="input-field">
            <input id="meal4" type="text" name="meal4" ref="meal4" />
            <label htmlFor="meal4">Meal #4</label>
          </div>

          <input type="submit" value="Save" className="btn" />
        </form>
      </div>

    )
  }
}

export default AddFeedback;
