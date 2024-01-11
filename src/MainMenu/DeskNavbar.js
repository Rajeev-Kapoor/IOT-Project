import React from 'react'
import {useColorModeValue,Stack,Box,Popover,PopoverTrigger,PopoverContent } from '@chakra-ui/react'
import { DeskSubNav } from './DeskSubnav'
import NAV_ITEMS from './Label'

export const DeskNavbar = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('white', 'gray.800')
   
      return (
      <Stack direction={'row'} spacing={4} pt={3}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Box
                  as="a"
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'lg'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Box>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DeskSubNav key={child.label} {...child} />
                        
           ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    )
  }


