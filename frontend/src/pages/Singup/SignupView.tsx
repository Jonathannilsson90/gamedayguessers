import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink,  } from "react-router-dom";
import logo from "../../assets/GDG.png";
import axios from "axios";
import { useForm, SubmitHandler,FieldValues } from "react-hook-form";
import { useState } from "react";

const defaultTheme = createTheme();

export default function SignUp() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

const [successMessage, setSuccessMessage] = useState("")

  const onSubmit:SubmitHandler<FieldValues> = async (data) => {
if(data.password !== data.retypePassword){
    setError('retypePassword', {
        type: "manual",
        message: "Passwords do not match",
    })
    return
}

    try {
      const response = await axios.post(
        "http://localhost:5002/api/user/register",
        {
          username: data.username,
          password: data.password,
        }
      );
      console.log(response);
      setSuccessMessage("Registration successful!")
   
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="" />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
                {successMessage &&<p className="text-green-400 text-xl">{successMessage}</p>}
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
       
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}></Grid>
              <Grid item xs={12} sm={6}></Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Username"
              autoComplete="text"
                  autoFocus
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <p className="text-red-400">Username is required</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-red-400">Password is required</p>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Re-type password"
                  type="password"
                  id="retypePassword"
                  autoComplete="new-password"
                  {...register('retypePassword', { required: true })}
                />
                {errors.retypePassword && (
                  <p className="text-red-400">Passwords do not match</p>
                )}
              </Grid>
            </Grid>
            {successMessage ? (
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                component={RouterLink}
                to="/" // Link to login page
              >
                Go Back to Login
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
          </Box>
       
      </Container>
    </ThemeProvider>
  );
}
