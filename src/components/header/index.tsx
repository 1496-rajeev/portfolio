import { Divider, Flex, Text } from "@chakra-ui/react";
import { ABOUT_PATH, HOME_PATH } from "../../constants";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../store";

interface IMenu {
  path: string;
  label: string;
}

export default function Header() {
  const navigate = useNavigate();
  const { value, setValue } = useAppContext();

  const menu: IMenu[] = [
    { path: HOME_PATH, label: "Home" },
    { path: ABOUT_PATH, label: "About" },
  ];
  return (
    <Flex
      backgroundColor={"white"}
      justifyContent={"center"}
      gap={5}
      paddingX={10}
      paddingY={3}
      rounded={"5rem"}
      className="shadow-xl border border-gray-100"
    >
      {menu.map((item, index) => {
        return (
          <Text
            key={index}
            onClick={() => {
              navigate(item.path);
              setValue(item.path);
            }}
            cursor={"pointer"}
            fontSize={"sm"}
            color={value === item.path ? "teal.400" : "black"}
          >
            {item.label}
            {value === item.path ? (
              <Divider
                borderBottomColor={"teal.400"}
                width={"80%"}
                borderBottomWidth="2px"
              />
            ) : null}
          </Text>
        );
      })}
    </Flex>
  );
}
