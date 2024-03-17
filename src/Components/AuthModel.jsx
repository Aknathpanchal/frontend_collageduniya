import { Modal, } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    // p: 4,
};
const defaultTheme = createTheme();
const AuthModel = ({ open, handleClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const toggleSigninSihnup = () => {
        setIsLogin(!isLogin);
    }

    function removeNullKeys(obj) {
        const newObj = {};
        for (const key in obj) {
            if (obj[key] !== null || key == "confirmPassword") {
                newObj[key] = obj[key];
            }
        }
        return newObj;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const payload = {
            email: data.get('email'),
            password: data.get('password'),
            fullName: data.get('fullName'),
        }
        isLogin ? handleLogin(removeNullKeys(payload)) : handleSignUp(removeNullKeys(payload));
    };

    const handleLogin = (payload) => {
        signin(payload)
    }
    const handleSignUp = (payload) => {
        signup(payload)

    }


    const signin = (payload) => {
        fetch("https://backend-collageduniya.vercel.app/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.type == "success") {
                    console.log(data, "success");
                    localStorage.setItem("user", JSON.stringify(data.user));
                    alert("Login successful")
                    handleClose()
                } else {
                    alert(data.message);
                }
            })
            .catch((err) => {
                console.error("Signin error:", err);
            });
    };


    const signup = (payload) => {
        fetch("https://backend-collageduniya.vercel.app/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                if (res.type === "success") {
                    alert(res.message);
                } else {
                    alert(res.message);
                }
            })
            .catch((err) => {
                console.error("Signup error:", err);
                alert("Something went wrong!");
            });
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>

                    <div className="d-flex">
                        <div>
                            <div className="modal-left"
                            >
                                <h3>Why Sign up?</h3>
                                <ul>
                                    <li>Exclusive deals</li>
                                    <li>More Savings</li>
                                    <li>Over 50 Stores</li>
                                    <li>Over 100 Categories</li>
                                </ul>
                            </div>
                        </div>

                        <div style={{ width: "350px", padding: "5% 0% 0% 0%" }}>
                            <div className='d-flex justify-content-around '>
                                <div onClick={toggleSigninSihnup} style={{ color: "#F7BB42", fontSize: "20px" }} >Login</div>
                                <span style={{ color: "#F7BB42", fontSize: "20px" }}>|</span>
                                <div onClick={toggleSigninSihnup} style={{ color: "#F7BB42", fontSize: "20px" }} >Signup</div>

                            </div>
                            {isLogin ? (<ThemeProvider theme={defaultTheme}>
                                <Container component="main" maxWidth="xs">
                                    <CssBaseline />
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}
                                    >

                                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                                autoFocus
                                            />
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                autoComplete="current-password"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox value="remember" color="primary" />}
                                                label="Remember me"
                                            />
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 }}
                                            >
                                                Sign In
                                            </Button>
                                            <Grid container>
                                                <Grid item xs>
                                                    <Link href="#" variant="body2">
                                                        Forgot password?
                                                    </Link>
                                                </Grid>

                                            </Grid>
                                        </Box>
                                    </Box>
                                </Container>
                            </ThemeProvider>
                            ) : (
                                <ThemeProvider theme={defaultTheme}>
                                    <Container component="main" maxWidth="xs">
                                        <CssBaseline />
                                        <Box
                                            sx={{
                                                // marginTop: 8,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                            }}
                                        >

<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <TextField
                autoComplete="given-name"
                name="fullName"
                required
                fullWidth
                id="full-name"
                label="Full Name"
                autoFocus
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                type="email"
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                inputProps={{ minLength: 6 }}
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                autoComplete="new-password"
                inputProps={{ minLength: 6 }}
            />
        </Grid>
    </Grid>
    <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
    >
        Sign Up
    </Button>
</Box>


                                        </Box>
                                    </Container>
                                </ThemeProvider>
                            )}

                        </div>
                    </div>

                </Box>
            </Modal>
        </div>
    )
}

export default AuthModel
