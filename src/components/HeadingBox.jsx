import { Box, Typography } from "@mui/material";
import React from "react";

const HeadingBox = ({ heading }) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, .03)",
        borderBottom: "1px solid rgba(0,0,0,.125)",
        padding: "0.75rem 1.25rem ",
      }}
    >
      <Typography variant="h3">{heading}</Typography>
    </Box>
  );
};

export default HeadingBox;
