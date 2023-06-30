import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
// import { changeValue } from '../../actions';

function Input({ name, ...props }) {
  // const value = useSelector((state) => state.user[name]);
  // const dispatch = useDispatch();
  // const handleChange = (event) => dispatch(changeValue(event.target.value, name));

  return (
    <input
      name={name}
      // value={value || ''}
      // onChange={handleChange}
      {...props}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Input;
