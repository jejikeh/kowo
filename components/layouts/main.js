import Head from "next/head"
import { Container,Box,Image , Center} from "@chakra-ui/react"
import Navbar from "../component.navbar"

const Main = ({ children, router }) => {
    const bgImg = "/images/lightBg.png"
    return(
        <Box as="main" backgroundImage = {bgImg} backgroundRepeat = "no-repeat" backgroundSize="cover">
            <Head>
                <meta name="viewport" content="width = device-width,  initial-scale  = 1 "/>
                <title>lenin</title>
            </Head>
                <Container display="static" p={4} maxW="container.md" wrap="wrap" align="center" justify="space-between">
                    <Navbar path={router.asPath}/>
                    <Container maxW = "container.md" p = { 0 } pt = {2} align = { "left" }>
                        <Box
                        as="nav"
                        position="inherit"
                        p = {4}
                        align="center"
                        backgroundColor = "#F3EFF5"
                        border="0px"
                        borderColor="#0D0A0B"
                        boxShadow = "dark-lg"
                        zIndex={1}
                        >
                            {children}
                        </Box>
                    </Container>
                </Container>

        </Box>
    )
}

export default Main