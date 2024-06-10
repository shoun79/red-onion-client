import { Box, styled } from "@mui/material";

export const SearchBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    background: '#ffffff',
    borderRadius: '50px',
    overflow: 'hidden',
    marginTop: theme.spacing(5),
    "& input": {
        border: 'none',
        outline: 'none',
        padding: '1rem 2rem',
        width: '100%',
        borderRadius: '30px',
        fontSize: '1.2rem'
    },
    "& button": {
        position: 'absolute',
        top: 0,
        right: 0,
        borderRadius: '30px',
        backgroundColor: '#f91944',
        color: '#ffffff',
        border: 'none',
        outline: 'none',
        padding: '1rem 2rem',
        fontSize: '1.2rem',
        cursor: 'pointer'
    }
}));

export const HeroWrapper = styled(Box)(({ theme }) => ({
    height: '70vh',
    width: '100%',
    background: 'url(https://i.ibb.co/6RTZ812/bannerbackground.png)',
    backgroundPosition: 'center',
    backgroundSize: '115%'
}))