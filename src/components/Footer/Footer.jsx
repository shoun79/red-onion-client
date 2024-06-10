import { Box, Container, Link, Typography, styled } from "@mui/material";
import { Flexbox } from "../styled/Flexbox";

const MenuBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 0,
    '& a': {
        textDecoration: 'none',
        color: '#ffffff',
        '&:not(:last-child)': {
            marginBottom: '8px',
        },
        '&:hover': {
            color: theme.palette.primary.main,
            transition: '.5s'
        }

    }

}))
const Footer = () => {
    return (
        <Box sx={{
            mt: 10,
            bgcolor: '#191919',
            padding: '4rem 0'
        }}>
            <Container>
                <Flexbox justifyContent={'space-between'} alignItems={'self-start !important'}>
                    <Box>
                        <img
                            src='https://i.ibb.co/PMXgjTz/logo.png'
                            alt='logo'
                            style={{ width: 150 }}
                        />
                    </Box>
                    <Flexbox>
                        <MenuBox component='ul' mr={6} >
                            <Link href="#">About Online Food</Link>
                            <Link href="#">Read Our Blog</Link>
                            <Link href="#">Sign up to deliver</Link>
                            <Link href="#">Add your restaurant</Link>
                        </MenuBox>
                        <MenuBox component='ul'>
                            <Link href="#">Get help</Link>
                            <Link href="#">Read FAQs</Link>
                            <Link href="#">View all cities</Link>
                            <Link href="#">Restaurants near me</Link>
                        </MenuBox>

                    </Flexbox>
                </Flexbox>

                <Flexbox justifyContent={'space-between'} mt={6}>
                    <Typography color='primary.greyText'>
                        Copyright &copy; 2022 Online Food
                    </Typography>
                    <Flexbox sx={{
                        display: 'flex',

                        '& a': {
                            textDecoration: 'none',
                            color: '#ffffff',
                            '&:not(:last-child)': {
                                mr: 3,
                            },
                            '&:hover': {
                                color: 'primary.main',
                                transition: '.5s'
                            }

                        }
                    }}>
                        <Link>Read FAQs</Link>
                        <Link>View all cities</Link>
                        <Link>Restaurants near me</Link>
                    </Flexbox>
                </Flexbox>
            </Container>
        </Box>
    );
};

export default Footer;