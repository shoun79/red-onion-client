import { Stack } from "@mui/material";
import FoodCategory from "../../components/FoodCategory/FoodCategory";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";

const Home = () => {
    return (
        <Stack spacing={10}>
            <Hero></Hero>
            <FoodCategory />
            <Features />
        </Stack>
    );
};

export default Home;