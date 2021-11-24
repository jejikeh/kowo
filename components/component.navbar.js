import Logo from "./component.logo"
import NextLink from "next/link"
import { Container, Box,Text, Link, Stack, Heading, useColorModeValue,Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorMide} from "@chakra-ui/react"

import { HumburgerIcon } from "@chakra-ui/icons"

const LinkItem = ({ href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue("gray400", "whiteAlpha.900")
    return (
        <NextLink href = { href }>
            <Link  bg = {active ? 'glassTeal' : inactiveColor}
            color = "#0D0A0B">
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
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
        {...props}>
            <Container display="flex" p={0} maxW="container.md" wrap="wrap" align="left" justify="space-between">
                <Flex align="center" justify="center">
                <Flex align="center" mr={5} ml={4}>
                        <Heading as="h1" size="lg" letterSpacing={""}>
                            <Logo/>
                        </Heading>
                    </Flex>
                <Stack direction = {{base : "column", md : "row"}}
                display={{base: "none", md: "inline-flex"}}
                width={{base : "full", md : 'auto'}}
                alignItems="center"
                flexGrow={1}
                p = {4}
                mt = {0}>
                    <Box align="center" >
                        <LinkItem href="/works" path={path} ><Text fontSize="16">./lenin</Text></LinkItem>
                    </Box>
                    <Box align="center" pl = { 8 } >
                        <LinkItem href="/blog" path={path} ><Text fontSize="16">./lenin</Text></LinkItem>
                    </Box>
                    <Box align="center" pl = { 8 } >
                        <LinkItem href="/source" path={path}><Text fontSize="16">./lenin</Text></LinkItem>
                    </Box>
                    <Box align="center" pl = { 8 } >
                        <LinkItem href="/source" path={path}><Text fontSize="16">./blog</Text></LinkItem>
                    </Box>
                </Stack>
                </Flex>
            </Container>
        </Box>
    )
}
export default Navbar;