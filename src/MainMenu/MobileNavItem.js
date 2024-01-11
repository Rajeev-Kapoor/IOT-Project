import React from "react"
import {Text, Stack,Box,useDisclosure,useColorModeValue,Collapse } from "@chakra-ui/react" 
import {Icon, ChevronDownIcon} from '@chakra-ui/icons'

const MobileNavItem = ({ label, children, href }) => {
          const { isOpen, onToggle } = useDisclosure()
          const linkColor = useColorModeValue('green.400', 'gray.200')
    const linkHoverColor = useColorModeValue("green.50", 'white')
   
          return (
            <Stack spacing={4} onClick={children && onToggle}>
              <Box
                py={2}
                as="a"  
                href={href ?? '#'}
                justifyContent="space-between"
                textAlign={"left"}
                alignItems="center"
                _hover={{
                    color:linkColor,
                    backgroundColor:linkHoverColor,
                }}
                >
                <Text fontWeight={600} color={useColorModeValue('lightgreen.600', 'gray.200')}>
                  {label}
                
                {children && (
                  <Icon
                    as={ChevronDownIcon}
                    transition={'all .25s ease-in-out'}
                    transform={isOpen ? 'rotate(180deg)' : ''}
                    w={6}
                    h={6}
                  />
                )}
                </Text>
              </Box>
        
              <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                  mt={-4}
                  pl={16}
                  borderLeft={1}
                  borderStyle={'solid'}
                  borderColor={useColorModeValue('gray.200', 'gray.700')}
                  align={'start'}>
                  {children &&
                    children.map((child) => (
                      <Box as="a" 
                      key={child.label} py={2} 
                      href={child.href}   
                      _hover={{
                 color: linkHoverColor,
                      textDecoration: 'none',
                    }}
    >                        {child.label}   - ({child.subLabel})
                      </Box>
                    ))}
                </Stack>
              </Collapse>
            </Stack>
          )
        }
        
    export default MobileNavItem