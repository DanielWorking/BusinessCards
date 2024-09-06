import React from "react";
import PropTypes from "prop-types";
import addressType from "../../models/types/addressType";
import { CardContent, Typography } from "@mui/material";

export default function CardBody({ phone, address, bizNumber }) {
    return (
        <>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <strong>Phone: </strong>
                    {phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Address: </strong>
                    {`${address.street} ${address.houseNumber} ${address.city}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Card Number: </strong>
                    {bizNumber}
                </Typography>
            </CardContent>
        </>
    );
}

CardBody.propTypes = {
    phone: PropTypes.string.isRequired,
    address: addressType.isRequired,
    bizNumber: PropTypes.number.isRequired,
};
