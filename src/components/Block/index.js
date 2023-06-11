import PropTypes from 'prop-types';
import './style.scss';

function Panel({ children }) {
  return (
    <section className="block">
      {children}
    </section>
  );
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Panel;
