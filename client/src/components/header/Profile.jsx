import { Box, Typography } from "@mui/material";
import React from "react";

const Profile = ({ account }) => {
  return (
    <>
      <Box>
        <Typography style={{ marginTop: 2 }}>{account}</Typography>
      </Box>
    </>
  );
};

export default Profile;
