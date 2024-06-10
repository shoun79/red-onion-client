
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import MealDetails from './pages/MealDetails/MealDetails';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import AuthContextProvider from './context/AuthContextProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartContextProvider from './context/CartContextProvider';
import OrderStatus from './pages/OrderStatus/OrderStatus';
import Checkout from './pages/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/meal-details/:mealId',
        element: <PrivateRoute><MealDetails></MealDetails></PrivateRoute>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/order-status',
        element: <OrderStatus></OrderStatus>
      },
      {
        path: '/checkout',
        element: <Checkout></Checkout>
      }
    ]
  },
]);
function App() {

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <CartContextProvider>
          <CssBaseline />
          <RouterProvider router={router} />
        </CartContextProvider>

      </AuthContextProvider>

    </ThemeProvider>
  )
}

export default App
