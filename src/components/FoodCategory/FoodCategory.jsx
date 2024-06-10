import { Box, Button, Container, Skeleton } from '@mui/material';
import TabButtons from '../Custom/TabButtons';
import { useState } from 'react';
import useMeals from '../../hooks/useMeals';
import FoodCard from '../FoodCard/FoodCard';
import { useNavigate } from 'react-router-dom';

const category = ["breakfast", "lunch", "dinner"];
const FoodCategory = () => {
    const [value, setValue] = useState(0);
    const { meals, loading } = useMeals(category[value]);
    const navigate = useNavigate();

    return (
        <Box >
            <Container>
                <Box sx={{
                    maxWidth: 500,
                    mx: 'auto'
                }}>
                    <TabButtons value={value} setValue={setValue} />
                </Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit,minmax(350px,1fr))',
                        justifyItems: 'center',
                        gap: '20px',
                        mt: 8
                    }}
                >
                    {
                        !loading && meals.map(meal => <FoodCard key={meal._id} meal={meal}></FoodCard>)
                    }
                    {
                        loading &&
                        Array.from(new Array(6)).map((item, i) => <Box key={i}
                        >
                            < Skeleton animation="wave" variant="circular" width={200} height={200} sx={{ mx: 'auto' }} />
                            <Skeleton animation="wave" variant="text" width={250} height={40} sx={{ mx: 'auto' }} />
                            <Skeleton animation="wave" variant="text" width={220} height={80} sx={{ mx: 'auto' }} />
                            <Skeleton animation="wave" variant="text" width={100} height={60} sx={{ mx: 'auto' }} />

                        </Box>)



                    }
                </Box>
                <Box sx={{ textAlign: 'center', mt: 5 }}>
                    <Button onClick={() => navigate('/checkout')} sx={{
                        borderRadius: '4px', '&:hover': {
                            bgcolor: 'gray'
                        }
                    }} >Checkout Your Food</Button>
                </Box>
            </Container>
        </Box>
    );
};

export default FoodCategory;