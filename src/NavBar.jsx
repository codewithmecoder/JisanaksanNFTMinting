import React from 'react'
import {Box, Button, Flex, Image, Link, Spacer} from '@chakra-ui/react'
import FaceBook from './assets/social-media-icons/facebook_32x32.png'
import Twitter from './assets/social-media-icons/twitter_32x32.png'
import Email from './assets/social-media-icons/email_32x32.png'
function NavBar({accounts, setAccounts}) {
  const isConnected = Boolean(accounts[0]);
  async function connectAccount(){
    if(window.ethereum){
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })
      setAccounts(accounts)
    }
  }
  const disconnectAccount = () => {
    setAccounts([])
  }
  return (
    <Flex justify="space-between" align="center" padding="30px">
      {/* left side -- Social Media Icons */}
      <Flex justify="space-around" width="40%" padding="0 75px">
        <Link href='https://www.facebook.com/nith.nos.77/' isExternal>
          <Image src={FaceBook} />
        </Link>
        <Link href='https://twitter.com/sokcheanith' isExternal>
          <Image src={Twitter} />
        </Link>
        <Link href='https://www.facebook.com/nith.nos.77/' isExternal>
          <Image src={Email} />
        </Link>
      </Flex>
      {/* Right side - sections and Connect */}
      <Flex justify="space-around" align="center" width="40%" padding="30px 30px 30px">
        <Box margin="0 15px">About</Box>
        <Spacer />
        <Box margin="0 15px">Mint</Box>
        <Spacer />
        <Box margin="0 15px">Team</Box>
        <Spacer />
        {/* Connect */}
      {isConnected ? (
        // <Box margin="0 15px">Connected</Box>
        <Button
          backgroundColor="#D65170"
          borderRadius="5px"
          boxShadow="0px 2px 2px 1px #0F0F0F"
          color="white"
          cursor="pointer"
          fontFamily="inherit"
          padding="15px"
          margin="0 15px"
          onClick={disconnectAccount}>Disconnect</Button>
      ):(
        <Button
          backgroundColor="#D65170"
          borderRadius="5px"
          boxShadow="0px 2px 2px 1px #0F0F0F"
          color="white"
          cursor="pointer"
          fontFamily="inherit"
          padding="15px"
          margin="0 15px"
          onClick={connectAccount}>Conncect</Button>
      )}
      </Flex>
    </Flex>
  )
}

export default NavBar