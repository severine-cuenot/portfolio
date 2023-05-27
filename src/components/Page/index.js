import PropTypes from 'prop-types';
import './style.scss';

function Page({ children, ...props }) {
  return (
    <main className="page" {...props}>
      {children}
    </main>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
