import { Box, Flex, Text } from "@chakra-ui/react";
import Header from "../../components/header";
import ProfileIcon from "../../components/profileIcon";

function AboutPage() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      flexDir={"column"}
    >
      <Box marginY={"1rem"} width={"fit-content"} position={"fixed"} top={1}>
        <Header />
      </Box>
      <ProfileIcon />
      <Box marginTop={{ base: "40%", sm: "30%", md: "20%", lg: "15%" }}>
        <Text>About me</Text>
      </Box>
    </Flex>
  );
}

export default AboutPage;
