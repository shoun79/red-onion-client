import { Box } from "@mui/material";
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <Box
            className={className}
            sx={{
                ...style,
                display: 'block',
                '&::before': {
                    color: '#191919',
                },
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <Box
            className={className}
            sx={{
                ...style,
                display: 'block',
                '&::before': {
                    color: '#191919',
                },
            }}
            onClick={onClick}
        />
    );
}


const ImageSlider = ({ images }) => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Box style={{ width: '450px', margin: '0 auto' }} className="slider-container">
            <Slider {...settings}>
                {
                    images.map((image, i) => (
                        <div style={{ width: '100%', height: '100%' }} key={i}>
                            <img
                                src={image}
                                alt="meal"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />

                        </div>
                    ))
                }
            </Slider>
        </Box>
    );
};

export default ImageSlider;