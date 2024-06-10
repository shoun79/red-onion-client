import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FeatureCard = ({ feature }) => {
    return (
        <Card sx={{
            width: '100%',
            maxWidth: '350px',
            padding: '30px 20px',
            borderRadius: '10px',
            '&:hover': {
                cursor: 'pointer',
                boxShadow:
                    'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 20px',
            }
        }}>
            <CardMedia
                component='img'
                height='auto'
                image={feature.image}
                alt='green iguana'
            />

            <CardContent sx={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                gap: 1,
                pt: 2,
                '&:last-child': {
                    pb: 0
                }
            }}>
                <Box
                    sx={{
                        bgcolor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 1,
                        borderRadius: '50%',
                    }}
                >
                    <feature.icon
                        sx={{
                            color: '#ffffff',
                        }}
                    />
                </Box>
                <Box>
                    <Typography gutterBottom variant='h6' component='div'>
                        {feature.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Lizards are a widespread group of squamate reptiles, with over
                        6,000 species, ranging across all continents except Antarctica
                    </Typography>
                    <Button
                        sx={{
                            mt: 3,
                        }}
                        endIcon={<ArrowForwardIcon />}
                    >
                        See more
                    </Button>
                </Box>
            </CardContent>

        </Card>
    );
};

export default FeatureCard;