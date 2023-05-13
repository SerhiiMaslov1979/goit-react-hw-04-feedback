import PropTypes from 'prop-types';
import '../FeedbackOptions/FeedbackOptions.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(onLeaveFeedback);
  return (
    <div className="Feedback__btn">
      {options.map(option => {
        return (
          <button
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedbac: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};
