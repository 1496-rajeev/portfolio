import { Box, Flex, Grid, Text, Image } from "@chakra-ui/react";
import Header from "../../components/header";
import ProfileIcon from "../../components/profileIcon";
import Photo from "../../assets/images/rajeev_photo.jpg";
import Footer from "../../components/footer";

function HomePage() {
  return (
    <Box minHeight="100vh">
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
        <Grid
          overflow={"scroll"}
          gridTemplateColumns={{ sm: "1fr", md: "1fr", lg: "1fr 1fr" }}
          marginTop={{ base: "30%", sm: "20%", md: "20%", lg: "15%" }}
          paddingX={{ base: "20px", sm: "20px", md: "80px", lg: "100px" }}
          gap={10}
          justifyContent={"center"}
          alignItems={"center"}
          marginBottom={{ base: "30%", sm: "20%", md: "20%", lg: "15%" }}
        >
          <Box>
            <Text color={"teal.500"} fontWeight={"bold"}>
              Hello,
            </Text>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              My name is Rajeev,
              <br /> I'm a Software Engineer.
            </Text>
            <Text marginTop={"0.8rem"}>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </Text>
            <button
              onClick={() => {
                window.location.assign("mailto:1496piku@gmail.com");
              }}
              className="relative border border-teal-500 mt-4 py-2 px-8 text-teal-500 text-base font-semibold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-teal-500 before:to-teal-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
            >
              Contact Me
            </button>
          </Box>
          <Box
            justifySelf={{
              base: "start",
              sm: "start",
              md: "start",
              lg: "center",
            }}
          >
            <Image
              src={Photo}
              width={"390px"}
              height={"390px"}
              className="shadow-lg rounded-lg bg-white"
            />
          </Box>
        </Grid>
      </Flex>

      {/* footer */}
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default HomePage;
