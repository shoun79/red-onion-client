import { Box, Container, Typography } from "@mui/material";
import { HeroWrapper, SearchBox } from "./Hero.style";

const Hero = () => {
    return (
        <HeroWrapper>
            <Container sx={{
                height: '100%',


            }}>
                <Box sx={{
                    width: '100%',
                    height: '100%',
                    display: 'grid',
                    placeItems: 'center'

                }}>
                    <Box sx={{
                        width: '50%',
                        mx: 'auto'
                    }}>
                        <Typography variant="h1" fontSize={'2.3rem'} fontWeight={600} textAlign={'center'}>Best Food Waiting For Your Belly</Typography>
                        <SearchBox>
                            <input type="search" placeholder="Search Food" alt="Search Food" />
                            <button>Search</button>
                        </SearchBox>
                    </Box>

                </Box>
            </Container>
        </HeroWrapper>
    );
};

export default Hero;