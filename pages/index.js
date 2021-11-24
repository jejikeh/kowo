import { Container, Box, Heading  } from "@chakra-ui/layout"
const Page = () => {
    return (
        <Container>

            <Box display = {{md:"flex"}} >
                <Box flexGrow={1} m = { 2 } >
                    <Heading> Hello byzova</Heading>
                    <p> Suck  Suckerberg</p>
                </Box>
            </Box>

        </Container>
    )
}

export default Page