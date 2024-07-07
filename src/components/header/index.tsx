import { Flex, Text } from "@chakra-ui/react";
import { ABOUT_PATH, HOME_PATH } from "../../constants";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../../store";

interface IMenu {
  path: string;
  label: string;
}

export default function Header() {
  const navigate = useNavigate();
  const path = useContext(AppContext);

  const menu: IMenu[] = [
    { path: HOME_PATH, label: "Home" },
    { path: ABOUT_PATH, label: "About" },
  ];
  return (
    <Flex
      backgroundColor={"white"}
      justifyContent={"center"}
      gap={5}
      boxShadow={"base"}
      paddingX={10}
      paddingY={3}
      rounded={"5rem"}
    >
      {menu.map((item, index) => {
        return (
          <Text
            key={index}
            onClick={() => {
              navigate(item.path);
            }}
            cursor={"pointer"}
            className="hover:text-teal-500 hover:font-medium"
            fontSize={"sm"}
            color={path === item.path ? "teal.400" : "black"}
          >
            {item.label}
          </Text>
        );
      })}
    </Flex>
  );
}
