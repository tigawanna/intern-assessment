import { Box, Center, Image } from "@chakra-ui/react";
import logo from "../../assets/payd.png";

export default function Navbar() {
  return (
    <Box boxSize="100%" bg="#26374b" py={3}>
      <Center>
        <Image src={logo} alt="logo" />
      </Center>
    </Box>
  );
}
