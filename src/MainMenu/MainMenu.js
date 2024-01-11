import React from 'react'

import logo from '../images/logo.jpeg'
import {Box,Flex,Button,Stack,IconButton,Collapse}from '@chakra-ui/react'
 import {useColorModeValue,useDisclosure,} from '@chakra-ui/react'
   import { HamburgerIcon,CloseIcon} from '@chakra-ui/icons'
import { DeskNavbar } from './DeskNavbar'
import MobileNav from './Mobile'
import { useNavigate } from 'react-router-dom'


  export const MainMenu = () => {
const navigate=useNavigate()
   const handlebacktomenu =()=>{
navigate("/");
   }


    const { isOpen, onToggle } = useDisclosure()
    


    return (     
            <Box >
              <Flex
                bg={useColorModeValue('lightgrey', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'70px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                  flex={{ base: 1, md: 'auto' }}
                  ml={{ base: -2 }}
                  display={{ base: 'flex', md: 'none' }}>
                  <IconButton
                    onClick={onToggle}
                    icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                  />
                </Flex>
                <Flex flex={{ base: 4  }} justify={{ base: 'left', md: 'start' }}>
                  
                    <img src={logo} style={{width:"70px" ,height:"auto"}} alt="tree"/>

                  <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                    <DeskNavbar />
                  </Flex>
                </Flex>
        
                <Stack
                  flex={{ base: 1, md: 0 }}
                  justify={'flex-end'}
                  direction={'row'}
                  spacing={6}>
                  <Button as={'a'} fontSize={'m'} fontWeight={400} variant={'link'} href={'#'} onClick={handlebacktomenu}>
                    Sign Out
                  </Button>
                  
                  
                </Stack>
              </Flex>
        
              <Collapse in={isOpen} animateOpacity>
                <MobileNav />
              </Collapse>
            </Box>
          )
        }
        
        export default MainMenu