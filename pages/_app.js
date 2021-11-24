import { ChakraProvider } from "@chakra-ui/provider"
import Layout from "../components/layouts/main"

const WebPage = ({ Component, pageProps, router}) => {
    return (
        <ChakraProvider>
            <Layout router = { router } >
                <Component {...pageProps} key = { router.route} />
            </Layout>
        </ChakraProvider>
    )
}

export default WebPage