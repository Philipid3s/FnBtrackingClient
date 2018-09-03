import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Feedbacks from './Feedbacks';
import About from './About';
import FeedbackDetails from './FeedbackDetails';
import AddFeedback from './AddFeedback'
import EditFeedback from './EditFeedback'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Feedbacks} />
      <Route exact path='/about' component={About} />
      <Route exact path='/feedbacks/add' component={AddFeedback} />
      <Route exact path='/feedbacks/edit/:id' component={EditFeedback} />
      <Route exact path='/feedbacks/:id' component={FeedbackDetails} />
    </Switch>
  </main>
)

export default Main;
