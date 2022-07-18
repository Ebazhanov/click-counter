import React, { useState } from "react";
import { Box, Button, FormGroup, FormLabel } from "@mui/material";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

function App() {
  const [count, setCount] = useState(0);
  const { width, height } = useWindowSize();

  if (count > 1) {
    return <Confetti width={width} height={height} numberOfPieces={2000} />;
  }

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <FormGroup>
          <FormLabel style={{ textAlign: "center" }} sx={{ fontSize: 72 }}>
            {count}
          </FormLabel>
          <Button
            type="button"
            variant="contained"
            onClick={() => setCount(count + 1)}
          >
            Count me!
          </Button>
        </FormGroup>
      </Box>
    </>
  );
}

export default App;
