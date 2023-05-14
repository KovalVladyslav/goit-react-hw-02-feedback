import css from './FeedbackOptions.module.css';
import propTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.listBtn}>
      {options.map(option => {
        return (
          <button
            onClick={() => onLeaveFeedback(option)}
            key={option}
            className={`${css.itemBtn} ${css.itemBtn__green}`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired),
  onLeaveFeedback: propTypes.func.isRequired,
};
