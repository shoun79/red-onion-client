import { Box, styled } from "@mui/material";


export const RegisterForm = styled(Box)(({ theme }) => ({
    width: '100%',
    maxWidth: 500,
    margin: '0 auto',
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    padding: theme.spacing(2),

}))