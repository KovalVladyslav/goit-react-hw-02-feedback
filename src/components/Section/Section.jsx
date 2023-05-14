import propTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
