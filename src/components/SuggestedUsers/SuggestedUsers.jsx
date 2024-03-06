import { VStack, Flex, Text, Box } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers"


const SuggestedUsers = () => {
  const {isLoading, suggestedUsers} = useGetSuggestedUsers();
  if(isLoading) return null;
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader/>
        {suggestedUsers.length !==0 && (
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
          </Text>
          <Text fontSize={12} fontWeight={"bold"} _hover={{color: "gray.400"}} cursor={"pointer"}>
            See All
          </Text>

        </Flex>
        )}
        {suggestedUsers.map((user)=>(
         <SuggestedUser user={user} key={user.id}/>
        ))}
       
        {/* <SuggestedUser name={"Bhupendra Jogi"} followers={6969} avatar='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/bhupendra-jogi-272420798-1x1.jpg?VersionId=JJZHo5tfQ5c7lkRH1v7nUss.4e2.YjvN'/>
        <SuggestedUser name='GYM' followers={"1M"} avatar="https://content.jdmagicbox.com/comp/bhilwara/v7/9999p1482.1482.221230235220.m5v7/catalogue/altron-gym-bhilwara-gyms-wqrdaw5j2o.jpg?clr="/>
        <SuggestedUser name="RAP" followers={"100M"} avatar="https://i1.sndcdn.com/artworks-ENo3zBIbo3nWCzLf-6bod5g-t500x500.jpg"/> */}

        <Box
        fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}
        >
        © 2024 Built By Kaustubh

        </Box>
    </VStack>
  )
}

export default SuggestedUsers
