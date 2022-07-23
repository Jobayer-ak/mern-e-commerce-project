import React from "react";
import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";

const Component = styled(Box)`
  height: 75vh;
  width: 90vh;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)``;

const LoginDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const Image = styled(Box)`
    background: #2874f0
      url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
      no-repeat center 85%;
    height: 100%;
    width: 40%;
    padding: 45px 35px;
  `;

  return (
    <Dialog open={open} onClose={handleClose}>
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">Login</Typography>
            <Typography style={{ marginTop: 20 }}>
              Get access to your Orders, Wishlist and Recommendations
            </Typography>
          </Image>
          <Wrapper>
            <TextField variant="standard" label="Enter Email/Mobile Number" />
            <TextField variant="standard" label="Enter Password" />
            <Typography>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Typography>
            <LoginButton>Login</LoginButton>
            <Typography>OR</Typography>
            <RequestOTP>Request OTP</RequestOTP>
            <Typography>New to Flipkart? Create an account.</Typography>
          </Wrapper>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
