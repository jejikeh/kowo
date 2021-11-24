import Link from "next/link"
import Image from "next/image"
import { Text } from "@chakra-ui/react"

import styled from "@emotion/styled"

const LogoBox = styled.span `
    font-size : 24px;
    display : inline-flex;
    align-items : center;
    height : 36px;
    line-height : 48px;
    padding : 24px;

    & : hover img {
        transform : rotate(180deg);
    }
`

const Logo = () => {
    const LogoImg = "/images/mon.gif"
    return(
        <Link href = "/">
            <a>
                <LogoBox>
            <Image src = {LogoImg} width = {40} height = {40} alt = "logo"/>

                    <Text color = "#0D0A0B"
                          fontFamily = "Inter"
                          fontStyle = "normal"
                          display = "flex"
                          fontSize = "24"
                          fontWeight = "500"
                          ml = {3}>
                        monke dum dum :)
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo;