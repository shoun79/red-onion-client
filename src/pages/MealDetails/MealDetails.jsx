import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Flexbox } from "../../components/styled/Flexbox";
import { useParams } from "react-router-dom";
import useMeal from "../../hooks/useMealById";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CounterBox } from "./mealDetails.style";
import { useState } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { useCart } from "../../hooks/useCart";


const MealDetails = () => {
    const { mealId } = useParams();
    const { meal, loading } = useMeal(mealId);
    const [quantity, setQuantity] = useState(0);
    const { cart, setCart } = useCart();

    const handleAddToCart = () => {
        setCart((cart) => [...cart, {
            ...meal,
            quantity
        }])
    };

    const adjustQuantity = (type) => {
        setQuantity(type === 'add' ? quantity + 1 : quantity - 1);
        setCart((cart) =>
            cart.map((item) => {
                if (item._id === meal._id) {
                    return {
                        ...item,
                        quantity:
                            type === 'add' ? item.quantity + 1 : item.quantity - 1,
                    };
                }

                return item;
            })
        );
    };
    if (loading) return <h2>Loading...</h2>
    return (
        <Box>
            <Container>
                <Flexbox sx={{ my: 5, gap: 10 }}>
                    <Box sx={{ flex: 1 }}>
                        <Stack spacing={4}>
                            <Typography variant='h4' fontWeight={600}>
                                {meal.title}
                            </Typography>
                            <Typography
                                variant='body'
                                color='primary.greyText'
                                sx={{
                                    width: 450,
                                }}
                            >
                                {meal.description}
                            </Typography>
                            <Flexbox>
                                <Typography variant='h4' fontWeight={400}>
                                    ${meal.price}
                                </Typography>
                                <CounterBox>
                                    <AddIcon onClick={() => adjustQuantity('add')} />
                                    <Typography
                                        variant='h5'
                                        sx={{ width: '20px' }}
                                        fontWeight={600}
                                    >
                                        {quantity}
                                    </Typography>
                                    <RemoveIcon onClick={() => adjustQuantity('remove')} />
                                </CounterBox>
                            </Flexbox>
                            <Button startIcon={<ShoppingCartOutlinedIcon />}
                                sx={{
                                    width: ['100%', '100%', '40%'],
                                }}
                                onClick={handleAddToCart}
                            >Add</Button>
                        </Stack>

                        {/* slider */}
                        <Box sx={{ mt: 10 }}>

                            <ImageSlider images={meal?.images}></ImageSlider>
                        </Box>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <img style={{
                            maxWidth: '100%',
                            width: '500px',
                            margin: '0 auto',
                            display: 'block'

                        }} src={meal?.defaultImage} alt="meal" />
                    </Box>
                </Flexbox>
            </Container>
        </Box>
    );
};

export default MealDetails;