import PropTypes from 'prop-types';
import './style.scss';

function Panel({ children, ...props }) {
  return (
    <section className="panel" {...props}>
      {children}
    </section>
  );
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Panel;
