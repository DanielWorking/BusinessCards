import PropTypes from "prop-types";
import imageType from "./imageType.js";
import addressType from "./addressType.js";

const cardType = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    web: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined])])
        .isRequired,
    image: imageType.isRequired,
    address: addressType.isRequired,
    bizNumber: PropTypes.number.isRequired,
    user_id: PropTypes.string.isRequired,
    // likes: PropTypes.arrayOf(PropTypes.string).isRequired,
    // createdAt: PropTypes.string.isRequired,
});
export default cardType;
