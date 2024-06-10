import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const PrivateRoute = ({ children, ...rest }) => {
    const { user, userLoading } = useAuth();
    const location = useLocation();

    if (userLoading)
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        );

    if (user) return children;

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;