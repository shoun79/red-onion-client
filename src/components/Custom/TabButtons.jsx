import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material';

const CustomTabs = styled(Tabs)(({ theme }) => ({
    boxShadow:
        'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
    borderRadius: '15px',
    padding: '5px',

    '& .MuiButtonBase-root': {
        textTransform: 'capitalize',

    },

    '& .MuiTabs-flexContainer': {
        justifyContent: 'space-between'
    },
    '& .MuiTabs-indicator': {
        display: 'none'
    }
    ,
    '& .Mui-selected': {
        color: 'white !important',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '10px'
    }


}))

export default function TabButtons({ value, setValue }) {

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <CustomTabs value={value} onChange={handleChange} centered>
                <Tab label="Breakfast" />
                <Tab label="Lunch" />
                <Tab label="Dinner" />
            </CustomTabs>
        </Box>
    );
}