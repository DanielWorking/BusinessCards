import PropTypes from "prop-types";

const addressType = PropTypes.shape({
    state: PropTypes.string,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    houseNumber: PropTypes.number.isRequired,
    zip: PropTypes.number,
});
export default addressType;
