import React from "react";
import { string, bool, object, func } from "prop-types";
import { TextField, Grid2 } from "@mui/material";
import { makeFirstLetterCapital } from "../utils/algoMethods";

export default function Input({
    variant = "outlined",
    type = "text",
    name,
    data,
    label,
    required = true,
    error,
    handleChange,
    ...rest
}) {
    return (
        <>
            <Grid2 xs={12} {...rest}>
                <TextField
                    variant={variant}
                    label={makeFirstLetterCapital}
                    type={type}
                    id={name}
                    name={name}
                    value={data[name] ? data[name] : ""}
                    required={required}
                    helperText={error}
                    error={Boolean(error)}
                    onChange={handleChange}
                    fullWidth
                    autoComplete="off"
                />
            </Grid2>
        </>
    );
}

Input.propTypes = {
    name: string.isRequired,
    required: bool.isRequired,
    type: string.isRequired,
    error: string.isRequired,
    handleChange: func.isRequired,
    variant: string.isRequired,
    data: object,
};
