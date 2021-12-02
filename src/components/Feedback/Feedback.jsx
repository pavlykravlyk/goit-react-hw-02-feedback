import React from 'react';
// import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Section from '../Section/Section';
import Options from './Options/Options';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

class Feedback extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  // static propTypes = {
  //   good: PropTypes.number,
  //   neutral: PropTypes.number,
  //   bad: PropTypes.number,
  // };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleGoodFeedback = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  handleNeutralFeedback = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  handleBadFeedback = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, curr) => acc + curr);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    return (
      <Container>
        <Section title={'Options'}>
          <Options
            // className="Options"
            options={'Please leave Feedback'}
            onLeaveNeutralFeedback={this.handleNeutralFeedback}
            onLeaveBadFeedback={this.handleBadFeedback}
            onLeaveGoodFeedback={this.handleGoodFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              // className="Statistics"
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage() + `%`}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default Feedback;
