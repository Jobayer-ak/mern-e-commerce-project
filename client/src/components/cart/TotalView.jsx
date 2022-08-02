import { Box, Typography , styled} from "@mui/material";
import React from "react";


const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
`

const Heading = styled(Typography)`
    color: #878787;
`

const Container  = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p{
        margin-bottom: 20px;
        font-size: 14px;
    }
    & > h6{
        margin-bottom: 20px;
    }
`

const Price = styled(Box)`
    float: right;
`
const TotalView = ({ cartItems }) => {
  return (
    <Box>
      <Header>
        <Heading> PRRICE DETAiLS</Heading>
      </Header>
      <Container>
        <Typography>
          Price {cartItems?.length}Item
          <Price component="span">₹100</Price>
        </Typography>
        <Typography>
          Discount {cartItems?.length}Item
          <Price component="span">₹100</Price>
        </Typography>
        <Typography>
          Delivery Charges {cartItems?.length}Item
          <Price component="span">₹100</Price>
        </Typography>
        <Typography variant="h6">
          Total Amount 
          <Price component="span">₹100</Price>
        </Typography>
        <Typography>
            You Will Save ₹100 on This Order
        </Typography>
      </Container>
    </Box>
  );
};

export default TotalView;
