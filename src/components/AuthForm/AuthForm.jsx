import { Box, VStack, Image, Flex, Text } from "@chakra-ui/react"
import {useState} from "react"
import Signup from "./Signup";
import Login from "./Login";
import GoogleAuth from "./GoogleAuth";


const AuthForm = () => {
    const [isLogin, setisLogin] = useState(true);
    
   
    
  return (
    <>
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
            <Image src='/logo.png' h={24} borderRadius={4} padding={5}></Image>
           

           {isLogin ? <Login/> : <Signup/>}

            <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                <Box flex={2} h={"1px"} bg={"gray.400"}/>
                <Text mx={1} color={"White"}>OR</Text>
                <Box flex={2} h={"1px"} bg={"gray.400"}/>

            </Flex>

            <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"}/>



        </VStack>
    </Box>

    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"} >
            <Box mx={2} fontSize={14}>
                {isLogin ? "Don't have an account?" : "Already have an account?"}

            </Box>
            <Box onClick={() => setisLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                {isLogin ? "Sign up" : "Log In"}
            </Box>
        </Flex>

    </Box>

    </>
  )
}

export default AuthForm
