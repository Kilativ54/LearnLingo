import PropTypes from 'prop-types';
import { Button } from './LinkToTeachers.styled';

const LinkToCatalog = ({ text }) => {
  return <Button to="/teachers">{text}</Button>;
};

LinkToCatalog.propTypes = {
  text: PropTypes.string.isRequired,
};

export default LinkToCatalog;
