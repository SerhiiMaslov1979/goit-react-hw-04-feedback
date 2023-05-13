import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import './App.css';




export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeavefeedback = option => {
    this.setState (prevState => {
      return {
       [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  render() {
    const positivePercentage = this.countPositiveFeedbackPercentage();
      return (
      <div className="container">
        <Section title='Please Leave feedback'>
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeavefeedback} />

          </Section>

          <Section title="Statistics">
            {this.countTotalFeedback() === 0 ? (<Notification message='There is no feedback yet...' />) : (
              <Statistics options={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={positivePercentage} />
            )}

          </Section>
                    
    </div>
  )
  };
}
