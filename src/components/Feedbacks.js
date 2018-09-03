import React, {Component} from 'react';
import axios from 'axios';
import FeedbackItem from './FeedbackItem';

class Feedbacks extends Component{
  constructor(){
      super();
      this.state = {
        feedbacks: []
      }
  }

  componentWillMount(){
    this.getFeedbacks();
  }

  getFeedbacks(){
    let url = `https://app-fnbtracking-api.herokuapp.com/api/feedbacks`;
    axios.get(url)
    .then(response => {
      this.setState({feedbacks: response.data}, () =>
      {
        // console.log(this.state);
      })
    })
    .catch(err => console.log(err));
  }

  render(){
    const feedbackItems = this.state.feedbacks.map((feedback, i) => {
      return(
        < FeedbackItem key={feedback.id} item={feedback} />
      )
    })
    return (
      <div>
        <h3>Feedbacks</h3>
        <ul className="collection">
          {feedbackItems}
        </ul>
      </div>
    )
  }
}

export default Feedbacks;
