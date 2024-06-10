import { Badge, Box, Button, Container, IconButton, Stack, Tooltip } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Flexbox } from "../styled/Flexbox";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import LogoutIcon from '@mui/icons-material/Logout';
import { useCart } from "../../hooks/useCart";

const Header = () => {
    const { user, logoutUser } = useAuth();
    const { cart } = useCart();
    const navigate = useNavigate();
    const handleLogout = () => {
        logoutUser()
    }
    return (
        <div>
            <Container >
                <Flexbox justifyContent={'space-between'} sx={{ padding: '2rem 0' }}>
                    <Box to='/' component={Link}>
                        <img
                            alt='Logo'
                            src='https://i.ibb.co/GV0gqff/logo2.png'
                            style={{
                                width: '160px',
                            }}
                        />
                    </Box>
                    <Stack direction={'row'} spacing={2} sx={{ alignItems: 'center' }}>


                        <Badge sx={{
                            cursor: 'pointer',
                            '&:hover  svg': {
                                color: 'primary.main',
                            },
                        }} onClick={() => navigate('/checkout')} badgeContent={cart?.reduce((acc, cur) => acc += cur.quantity, 0)} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                        {
                            !user && <>
                                <Button to='/login' component={Link} variant="text" sx={{ color: '#191919' }}>Sign in</Button>
                                <Button to='/register' component={Link} sx={{ color: '#fff' }} >Sign up</Button>
                            </>
                        }
                        {
                            user && <>
                                <Button variant="text" sx={{ color: '#191919' }} >{user?.displayName}</Button>
                                <Tooltip title="Logout">
                                    <IconButton onClick={handleLogout}>
                                        <LogoutIcon />
                                    </IconButton>
                                </Tooltip>

                            </>

                        }
                    </Stack>
                </Flexbox>

            </Container>
        </div >
    );
};

export default Header;