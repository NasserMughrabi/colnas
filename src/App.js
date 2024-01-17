import { Box, ChakraProvider } from "@chakra-ui/react";
import Upload from "./components/Upload";

function App() {
  return (
    <ChakraProvider>
      <Box height={"100vh"}>
        <Upload />
      </Box>
    </ChakraProvider>
  );
}

export default App;
