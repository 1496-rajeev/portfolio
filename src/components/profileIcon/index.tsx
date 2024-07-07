import { Avatar, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../../constants";

export default function ProfileIcon() {
  const navigate = useNavigate();
  return (
    <Box
      position={"fixed"}
      left={4}
      top={4}
      cursor={"pointer"}
      onClick={() => navigate(HOME_PATH)}
    >
      <Avatar
        boxShadow={"lg"}
        name="R V"
        backgroundColor={"teal.400"}
        border={"2px"}
      />
    </Box>
  );
}
