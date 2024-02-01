import React, { useState } from 'react'
import { Slider,Box,SliderMark,SliderTrack,SliderFilledTrack,SliderThumb } from '@chakra-ui/react'
import { updatedata } from '../firebase/firebase'
export const Regulator = (props) => {
  const{name ,roomName}=props
    const [sliderValue, setSliderValue] = useState(50)
  console.log(sliderValue,"sildervalue")
    const labelStyles = {
      mt: '2',
      ml: '-2.5',
      fontSize: 'sm',
    }
    const handlechange=(val)=>{
      setSliderValue(val)
      updatedata(roomName,name,val)
    }
  
    return (<>
      <div style={{textAlign:"center",display:"inline-block",width:"100%", padding:"4px"}}>{name}
      <Box p={5} pt={6}>
        <Slider  onChange={(val) => handlechange(val)}>
        <SliderMark value={0} {...labelStyles}>
            0%
          </SliderMark>
         
          <SliderMark value={50} {...labelStyles}>
            50%
          </SliderMark>
         
          <SliderMark value={100} {...labelStyles}>
            100%
          </SliderMark>
          <SliderMark
            value={sliderValue}
            textAlign='center'
            fontSize= 'sm'
            bg='blue.300'
            color='white'
            mt='-8'
            ml='-5'
            w='9'
          >
            {sliderValue}%
          </SliderMark>
          <SliderTrack>
              <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box> 
      </div>      </>    )
  }

