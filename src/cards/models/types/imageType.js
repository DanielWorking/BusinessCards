import PropTypes from "prop-types";

const imageType = PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
});
export default imageType;
