import PropTypes from 'prop-types';
export const Notification = ({ message }) => {
    return <p className='Notification'>{message}</p>
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

