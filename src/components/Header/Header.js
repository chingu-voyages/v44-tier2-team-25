import { Box, Flex, Image } from "@chakra-ui/react";
import "./header.scss";

const Header = () => {
  return (
    <Flex className="header-component" as="header" align="center" justify="center">
      <Box className="logo-boolebots">
        <Image src="/logo-boolebots.png" alt="Logo" />
      </Box>
    </Flex>
  );
};

export default Header;
