import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchExchanges();
  }, []);
  if (error) return <Error message="Error while Fetching Exchanges." />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <>
                <a href={i.url} target={"blank"}>
                  <VStack
                    w={"52"}
                    shadow={"lg"}
                    p={"8"}
                    borderRadius={"lg"}
                    transition={"all 0.5s"}
                    m={"4"}
                    style={{
                      borderImage:
                        "linear-gradient(rgb(145, 90, 241), rgb(255, 121, 112),rgb(112, 255, 160)) 1",
                      borderWidth: " 2px",
                      borderStyle: "solid",
                    }}
                    css={{ "&:hover": { transform: "scale(1.1)" } }}
                    title="Click to show more details of Coins"
                  >
                    <Image
                      src={i.image}
                      w={"10"}
                      h={"10"}
                      objectFit={"contain"}
                      alt={"Exchange"}
                    />
                    <Heading size={"md"} noOflines={1} color={"white"}>
                      {i.trust_score_rank}
                    </Heading>
                    <Text noOflines={1} color={"white"}>
                      {i.name}
                    </Text>
                  </VStack>
                </a>
              </>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Exchanges;
