// icons
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Box, Container, Typography } from '@mui/material';
import FeatureCard from '../FeatureCard/FeatureCard';

const featuresCardData = [
    {
        title: 'Fast delivery',
        description:
            'Red Onion is a simple service to order food from a variety of restaurants online. Enjoy different cuisines and flavours delivered to your door step.',
        image: 'https://i.ibb.co/cc8nQbw/adult-blur-blurred-background-687824.png',
        icon: DirectionsBusIcon,
    },
    {
        title: 'A good auto responder',
        description:
            'Red Onion is a simple service to order food from a variety of restaurants online. Enjoy different cuisines and flavours delivered to your door step.',
        icon: LocalShippingIcon,
        image: 'https://i.ibb.co/hMBwzGR/chef-cook-food-33614.png',
    },
    {
        image: 'https://i.ibb.co/fxnVgRS/architecture-building-city-2047397.png',
        title: 'Home Delivery',
        description:
            'Red Onion is a simple service to order food from a variety of restaurants online. Enjoy different cuisines and flavours delivered to your door step.',
        icon: NotificationsActiveIcon,
    },
];
const Features = () => {
    return (
        <Box sx={{
            width: '100%'
        }}>
            <Container>
                <Typography variant='h4'>Why choose us?</Typography>
                <Typography
                    variant='body2'
                    sx={{
                        width: '500px',
                        mt: 3,
                    }}
                >
                    Are you hungry? Did you have a long and stressful day? Interested
                    in getting a cheesy pizza delivered to your office or home? Then
                    we are here to help.
                </Typography>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit,minmax(350px,1fr))',
                    justifyItems: 'center',
                    gap: '1rem',
                    mt: 8,
                    alignItems: 'flex-start'

                }}>
                    {
                        featuresCardData.map((feature, i) => <FeatureCard key={i}
                            feature={feature}
                        ></FeatureCard>)
                    }
                </Box>
            </Container>
        </Box>
    );
};

export default Features;