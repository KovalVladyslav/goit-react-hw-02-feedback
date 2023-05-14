import css from './Statistics.module.css';
import propTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return good || neutral || bad ? (
    <ul className={css.list}>
      <li className={css.item__green}>Good: {good}</li>
      <li className={css.item__blue}>Neutral: {neutral}</li>
      <li className={css.item__red}>Bad: {bad}</li>
      <li className={css.item}>Total: {total}</li>
      <li className={css.item}>Positive Feedback: {positivePercentage}%</li>
    </ul>
  ) : (
    <span className={css.blockFeedBack}>There is no feedback</span>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
