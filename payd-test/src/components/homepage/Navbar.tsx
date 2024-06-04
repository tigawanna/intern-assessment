import { Box, Center, Image } from "@chakra-ui/react";
import logo from "../../assets/payd.png";

export default function Navbar() {
  return (
    <Box
      boxSize="100%"
      bg="#26374b"
      py={3}
      style={{ position: "sticky", top: "0px" }}
      boxShadow={"lg"}
    >
      <Center>
        <Image src={logo} alt="logo" />
      </Center>
    </Box>
  );
}
