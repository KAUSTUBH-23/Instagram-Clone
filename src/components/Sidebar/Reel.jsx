import {Box, Image, Tooltip, Flex} from '@chakra-ui/react'
const Reel = () => {
    return (
		<Tooltip
			hasArrow
			label={"Notifications"}
			placement='right'
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
			<Flex
				alignItems={"center"}
				gap={4}
				_hover={{ bg: "whiteAlpha.400" }}
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}
			>
				<Image src="/reel.svg" />
				<Box display={{ base: "none", md: "block" }}>Reels</Box>
			</Flex>
		</Tooltip>
	);
}
export default Reel;
