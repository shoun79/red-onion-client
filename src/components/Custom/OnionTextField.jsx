import { TextField, styled } from "@mui/material";
import { forwardRef } from "react";

export const CustomTextField = styled(TextField)(({ theme }) => ({
    backgroundColor: '#f5f5f5',
    borderRadius: theme.spacing(1),
    '& MuiOutlinedInput-root': {

    },
    '& fieldset': {
        border: 'none'
    }


}))

const OnionTextField = (props, ref) => {
    return (
        <CustomTextField
            {...props}
            inputRef={ref}

        />
    );
};

export default forwardRef(OnionTextField);