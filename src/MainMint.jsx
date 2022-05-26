import React, {useState} from 'react'
import {ethers, BigNumber} from 'ethers'
import {Box, Button, Flex, Input, Text} from '@chakra-ui/react'
import JisanaksanNFT from './JisanaksanNFT.json'

const jisanaksanNFTAddress = "0x6a43C5497ba6C291B334Ed96a01E293658Fa90b3"
function MainMint({accounts, setAccounts}) {

  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0])

  async function handleMint(){
    if(window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(jisanaksanNFTAddress, JisanaksanNFT.abi, signer)
    
    try {
      await contract.mint(BigNumber.from(mintAmount), {
        value: ethers.utils.parseEther((0.02 * mintAmount).toString())
      });
      setMintAmount(1)
    } catch (error) {
      console.error("error", error)
    }
    }
  }

  const hadleDecrement = () => {
    if(mintAmount <= 1) return
    setMintAmount(mintAmount - 1)
  }
  const hadleIncrement = () => {
    if(mintAmount >= 3) return
    setMintAmount(mintAmount + 1)
  }
  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box width="520px">
        <div>
          <Text fontSize='40px' textShadow="0 5px #000000">Jisanaksan NFT</Text>
          <Text 
            fontSize="25px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px 2px #000000">It's 2090. Can the Jisanaksan NFT save humans from destructive rampant NFT speculation? Mint Jisanaksan to find out</Text>
        </div>
        {isConnected ? (
          <div>
            <Flex align="center" justify="center">
              <Button 
                backgroundColor="#D65170"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="0 15px"
                onClick={hadleDecrement}>-</Button>
              <Input 
                readOnly
                fontFamily="inherit"
                width="100px"
                height="40px"
                textAlign="center"
                paddingLeft="19px"
                marginTop="1px"
                outline="none"
                type="number" value={mintAmount}/>
              <Button 
                backgroundColor="#D65170"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="15px"
                onClick={hadleIncrement}>+</Button>
            </Flex>
            <Button 
              backgroundColor="#D65170"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="15px"
              onClick={handleMint}>Mint Now</Button>
          </div>
        ):(
          <Text
            marginTop="70px"
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 3px #000000"
            color="#D6517D"
            >
            You must be connected to Mint.
          </Text>
        )}
      </Box>

    </Flex>
  )
}

export default MainMint