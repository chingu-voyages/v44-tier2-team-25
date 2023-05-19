import { Box, Flex, Text, Link } from "@chakra-ui/react";
import "./footer.scss";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex className="footer-component" as="footer">
      <Box className="copyright">
        <Text>
          <Link
            href="https://www.chingu.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chingu {currentYear}{" "}
          </Link>
          - Voyage 44, Team 25.
        </Text>
      </Box>
      <Box className="repository">
        <Link
          className="link"
          href="https://github.com/chingu-voyages/v44-tier2-team-25"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={16} style={{ marginRight: "8px" }} />
          <Text>Go to project repository</Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default Footer;
