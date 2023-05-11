import { Button, Grid, TextField, Typography } from "@mui/material";
import "./Login.css";
import { useState } from "react";
import useGenerateId from "../hooks/useGenerateId";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setOrderId, setOrderName } from "../app/appSlice";

export function Login() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const id = useGenerateId();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const createSalad = () => {
    if (!name) {
      setError(true);
    } else {
      dispatch(setOrderName(name));
      dispatch(setOrderId(id));

      navigate(`/salad/${id}`);
    }
  };

  return (
    <>
      <div className="login-header">
        <Typography variant="h3" component="div">
          Welcome to our salad bar !
        </Typography>
      </div>
      <div className="login-form">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              error={error}
              helperText={error && "Please enter your name"}
              label="What is your name ?"
              variant="outlined"
              required
              onChange={(e) => {
                setName(e.target.value);
                setError(false);
              }}
            />
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={4}>
            <Button variant="contained" onClick={createSalad}>
              Choose my salad
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
