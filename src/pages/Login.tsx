import { Box, Button, TextField } from "@mui/material";

export function Login() {
  return (
    <>
      <h1>Welcome to our salad bar !</h1>

      <Box component="div" sx={{ p: 2, width: 300, height: 300 }}>
        <div>
          <TextField
            id="outlined-basic"
            label="What is your name ?"
            variant="outlined"
          />
        </div>
        <Button variant="contained">Choose my salad</Button>
      </Box>
    </>
  );
}
