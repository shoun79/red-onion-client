import { Box, Button, Container, Typography } from "@mui/material";
import { RegisterForm } from "./Register.style";
import OnionTextField from "../../components/Custom/OnionTextField";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { registerWithEmailAndPassword } = useAuth();
    const navigate = useNavigate();

    const handleRegister = async ({ name, email, password }) => {

        await registerWithEmailAndPassword(name, email, password, navigate)
        reset()
    }

    return (
        <Box sx={{
            height: '90vh',
            width: '100%',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <Container>
                <RegisterForm component='form' onSubmit={handleSubmit(handleRegister)}>
                    <Typography variant='h3' color='primary' textAlign='center'>
                        Sign Up
                    </Typography>
                    <OnionTextField
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })}
                        placeholder='Name'
                        variant="outlined"
                        type='text'

                        error={errors.name}
                        helperText={errors.name && errors.name.message}

                    />
                    <OnionTextField
                        {...register("email", {
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Invalid email address',
                            },
                            required: {
                                value: true,
                                message: 'Email is required'
                            }
                        })}
                        placeholder='Email'
                        variant="outlined"
                        type='email'
                        error={errors.email}
                        helperText={errors.email && errors.email.message}
                    />
                    <OnionTextField
                        placeholder='Password'
                        variant="outlined"
                        type='password'
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Please input a password'
                            },
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long',
                            }
                        })}
                        error={errors.password}
                        helperText={errors.password && errors.password.message}
                    />
                    <Link style={{
                        color: '#f91944',
                    }} to='/login' component={''}>
                        Already have an account?
                    </Link>
                    <Button sx={{
                        borderRadius: '8px',
                    }} type="submit">Sign Up</Button>
                </RegisterForm>

            </Container>
        </Box>
    );
};

export default Register;