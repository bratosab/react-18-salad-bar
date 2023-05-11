import { Typography } from "@mui/material";
import { useAppSelector } from "../hooks/useAppSelector";

export function Salad() {
  // const name = useSelector((state: RootState) => state.app.name);
  const name = useAppSelector((state) => state.app.name);

  return (
    <>
      <Typography variant="h4" component="div">
        Welcome {name},
      </Typography>
      <Typography variant="h5" component="div">
        make your order :
      </Typography>
    </>
  );
}
