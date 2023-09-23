import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => (
  <Link to={`/coin/${id}`}>
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
      style={{
        borderImage:
          "linear-gradient(rgb(145, 90, 241), rgb(255, 121, 112),rgb(112, 255, 160)) 1",
        borderWidth: " 2px",
        borderStyle: "solid",
      }}
      title={"click to show details of Coins"}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1} color={"white"}>
        {symbol}
      </Heading>

      <Text noOfLines={1} color={"white"}>
        {name}
      </Text>
      <Text noOfLines={1} color={"white"}>
        {price ? `${currencySymbol}${price}` : "NA"}
      </Text>
    </VStack>
  </Link>
);

export default CoinCard;
