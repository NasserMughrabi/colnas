import React from "react";
import {
  AspectRatio,
  Box,
  BoxProps,
  Container,
  forwardRef,
  Heading,
  Input,
  Stack,
  HStack,
  Text,
  Progress,
  Flex,
  CircularProgress,
  CircularProgressLabel,
  Button,
  VStack,
  List,
  ListItem,
  ListIcon,
  Card,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  useDisclosure,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import colors from "../colors";

const first = {
  rest: {
    rotate: "-15deg",
    scale: 0.95,
    x: "-50%",
    filter: "grayscale(80%)",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    x: "-70%",
    scale: 1.1,
    rotate: "-20deg",
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const second = {
  rest: {
    rotate: "15deg",
    scale: 0.95,
    x: "50%",
    filter: "grayscale(80%)",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    x: "70%",
    scale: 1.1,
    rotate: "20deg",
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const third = {
  rest: {
    scale: 1.1,
    filter: "grayscale(80%)",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    scale: 1.3,
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const PreviewImage = forwardRef((props, ref) => {
  return (
    <Box
      bg="black"
      top="0"
      height="100%"
      width="100%"
      position="absolute"
      borderWidth="1px"
      borderStyle="solid"
      rounded="sm"
      borderColor="gray.400"
      as={motion.div}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundImage={`url("https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg")`}
      {...props}
      ref={ref}
    />
  );
});

const Upload = () => {
  const controls = useAnimation();
  const startAnimation = () => controls.start("hover");
  const stopAnimation = () => controls.stop();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  //   const [loading, setLoading] = useState(false);
  //   const [loadingVal, setLoadingVal] = useState(0);

  const handleUpload = (e) => {
    const files = e.target.files;
    setUploadedFiles([...files]);
    setIsOpen(true)
  };

  return (
    <Flex justifyContent={"center"}>
      <VStack>
        <Text fontSize={{ base: "2rem", md: "4rem" }} color={"black"}>
          Invoices
        </Text>
        <Container
          my="12"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <AspectRatio width="64" ratio={1}>
            <Box
              borderColor="gray.300"
              borderStyle="dashed"
              borderWidth="2px"
              rounded="md"
              shadow="sm"
              role="group"
              transition="all 150ms ease-in-out"
              _hover={{
                shadow: "md",
              }}
              as={motion.div}
              initial="rest"
              animate="rest"
              whileHover="hover"
              cursor={"pointer"}
            >
              <Box position="relative" height="100%" width="100%">
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  height="100%"
                  width="100%"
                  display="flex"
                  flexDirection="column"
                >
                  <Stack
                    height="100%"
                    width="100%"
                    display="flex"
                    alignItems="center"
                    justify="center"
                    spacing="4"
                  >
                    <Box height="16" width="12" position="relative">
                      <PreviewImage
                        variants={first}
                        backgroundImage="url('https://t4.ftcdn.net/jpg/05/60/45/97/240_F_560459792_f8KCb2ZdaIZzZrEA2HaQ5erYCtT8wlcu.jpg')"
                      />
                      <PreviewImage
                        variants={second}
                        backgroundImage="url('https://t4.ftcdn.net/jpg/05/60/45/97/240_F_560459798_cMFsMWIxvNs2OGfZjtN8eYRmN0oIiZ0b.jpg')"
                      />
                      <PreviewImage
                        variants={third}
                        backgroundImage={`url("https://t3.ftcdn.net/jpg/05/60/45/98/240_F_560459822_Hp4aIPk2EMYkDaiCPTthDL9kgndWr16J.jpg")`}
                      />
                    </Box>
                    <Stack p="8" textAlign="center" spacing="1">
                      <Heading fontSize="lg" color="black" fontWeight="bold">
                        Drop PDF here
                      </Heading>
                      <Text fontWeight="light" color={"black"}>
                        or click to upload
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
                <Input
                  multiple
                  type="file"
                  height="100%"
                  width="100%"
                  position="absolute"
                  top="0"
                  left="0"
                  opacity="0"
                  aria-hidden="true"
                  accept="image/*"
                  onDragEnter={startAnimation}
                  onDragLeave={stopAnimation}
                  cursor={"pointer"}
                  onChange={handleUpload}
                />
              </Box>
            </Box>
          </AspectRatio>
        </Container>
      </VStack>
      <Box display={isOpen ? "block" : "none"} borderRadius={8} p={4} mt={2} ml={10}>
        <Card maxW="sm">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">Files</Heading>
              <List spacing={3} mt={2}>
                {uploadedFiles &&
                  uploadedFiles.map((file, index) => {
                    return (
                      <ListItem key={index}>
                        <ListIcon as={MdCheckCircle} color={colors.violet} />
                        {file.name}
                      </ListItem>
                    );
                  })}
              </List>
            </Stack>
          </CardBody>
          {/* <Divider /> */}
          <CardFooter>
            <Button
              bgColor={colors.violet}
              _hover={{ bgColor: colors.violetHover }}
              color={"white"}
              w={"8rem"}
            >
              Extract data
            </Button>
          </CardFooter>
        </Card>
      </Box>
    </Flex>
  );
};

export default Upload;
