import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EditMeetup extends Component{
  constructor(props){
    super(props);
    this.state = {
      id:'',
      flight: '',
      aircraft: '',
      pax: 0,
      datetime: 0,
      departing: '',
      arriving: '',
      meal1: 0,
      meal2: 0,
      meal3: 0,
      meal4: 0
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
    this.getFeedbackDetails();
  }

  getFeedbackDetails(){
    let feedbackId = this.props.match.params.id;
    axios.get(`https://app-fnbtracking-api.herokuapp.com/api/feedbacks/${feedbackId}`)
    .then(response => {
      this.setState({
        id: response.data.id,
        flight: response.data.flight,
        aircraft: response.data.aircraft,
        pax: response.data.pax,
        datetime: response.data.datetime,
        departing: response.data.departing,
        arriving: response.data.arriving,
        meal1: response.data.meal1,
        meal2: response.data.meal2,
        meal3: response.data.meal3,
        meal4: response.data.meal4
      }, () => {
        console.log(this.state);
      });
    })
    .catch(err => console.log(err));
    }

  editFeedback(newFeedback){
    axios.request({
      method:'put',
      url:`https://app-fnbtracking-api.herokuapp.com/api/feedbacks/${this.state.id}`,
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
    this.editFeedback(newFeedback);
    e.preventDefault();
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to="/">Back</Link>
       <h3>Edit Feedback</h3>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input id="flight" type="text" name="flight" ref="flight" value={this.state.flight} onChange={this.handleInputChange}/>
            <label htmlFor="flight" className="active">Flight</label>
          </div>

          <div className="input-field">
            <input id="aircraft" type="text" name="aircraft" ref="aircraft" value={this.state.aircraft} onChange={this.handleInputChange}/>
            <label htmlFor="aircraft" className="active">Aircraft</label>
          </div>

          <div className="input-field">
            <input id="pax" type="text" name="pax" ref="pax" value={this.state.pax} onChange={this.handleInputChange}/>
            <label htmlFor="pax" className="active">Pax</label>
          </div>

          <div className="input-field">
            <input id="departing" type="text" name="departing" ref="departing" value={this.state.departing} onChange={this.handleInputChange}/>
            <label htmlFor="departing" className="active">Departing</label>
          </div>

          <div className="input-field">
            <input id="arrival" type="text" name="arrival" ref="arrival" value={this.state.arriving} onChange={this.handleInputChange}/>
            <label htmlFor="arrival" className="active">Arrival</label>
          </div>

          <div className="input-field">
            <input id="meal1" type="text" name="meal1" ref="meal1" value={this.state.meal1} onChange={this.handleInputChange}/>
            <label htmlFor="meal1" className="active">Meal #1</label>
          </div>

          <div className="input-field">
            <input id="meal2" type="text" name="meal2" ref="meal2" value={this.state.meal2} onChange={this.handleInputChange}/>
            <label htmlFor="meal2" className="active">Meal #2</label>
          </div>

          <div className="input-field">
            <input id="meal3" type="text" name="meal3" ref="meal3" value={this.state.meal3} onChange={this.handleInputChange}/>
            <label htmlFor="meal3" className="active">Meal #3</label>
          </div>

          <div className="input-field">
            <input id="meal4" type="text" name="meal4" ref="meal4" value={this.state.meal4} onChange={this.handleInputChange}/>
            <label htmlFor="meal4" className="active">Meal #4</label>
          </div>

          <input type="submit" value="Save" className="btn" />
        </form>

        <br/>
        <br/>

      </div>
    )
  }
}

export default EditMeetup;
