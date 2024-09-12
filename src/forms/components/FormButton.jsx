import React, { memo } from "react";
import { string, bool, node, func } from "prop-types";
import { Button } from "@mui/material";

function FormButton({
    variant = "contained",
    component = "button",
    size = "medium",
    color = "primary",
    onClick,
    disabled = false,
    node,
}) {
    return (
        <>
            <Button
                variant={variant}
                component={component}
                size={size}
                color={color}
                onClick={onClick}
                disabled={disabled}
                fullWidth
            >
                {node}
            </Button>
        </>
    );
}

FormButton.propTypes = {
    variant: string.isRequired,
    component: string.isRequired,
    size: string.isRequired,
    color: string.isRequired,
    onClick: func.isRequired,
    disabled: bool.isRequired,
    node: node.isRequired,
};

export default memo(FormButton);
