import { Box, Flex, Text } from "@chakra-ui/react";
import Header from "../../components/header";
import ProfileIcon from "../../components/profileIcon";

function HomePage() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      flexDir={"column"}
    >
      <ProfileIcon />
      <Box marginY={"1rem"} width={"fit-content"}>
        <Header />
      </Box>
      <Box>
        <Text>I am Rajeev</Text>
      </Box>
    </Flex>
  );
}

export default HomePage;
