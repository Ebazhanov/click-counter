import React, { useState } from "react";
import { Box, Button, FormGroup, FormLabel } from "@mui/material";
import ReactConfetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

function App() {
  const [count, setCount] = useState(0);
  const { width, height } = useWindowSize();

  if (count > 2) {
    return <ReactConfetti width={width} height={height} />;
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
