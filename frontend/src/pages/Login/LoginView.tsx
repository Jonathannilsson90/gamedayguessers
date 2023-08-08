import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "../../assets/GDG.png";
import axios from "axios";

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { useState } from "react";

export default function SignIn() {
  const [loginError, setLoginError] = useState("")
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const navigate = useNavigate();

  const onSubmit:SubmitHandler<FieldValues> = async (data) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await axios.post("http://localhost:5002/api/user/token", {
        username: data.username,
        password: data.password,
      });
      navigate(`/mypage/${data.username}`)
    } catch (error) {
   setLoginError("Incorrect login information.")
    }
  };

  return (
    <Container component="main" maxWidth="xs">
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
          Sign in
        </Typography>
        {loginError && <p className="text-red-400 text-2xl">{loginError}</p>}
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            autoComplete="text"
            autoFocus
            {...register("username", { required: true })}
          />
          {errors.username && <p className="text-red-400">Username is required</p>}
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password", { required: true })}
          />
          {errors.password && <p className="text-red-400">Username is required</p>}
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
            <Grid item>
              <Link component={RouterLink} to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
