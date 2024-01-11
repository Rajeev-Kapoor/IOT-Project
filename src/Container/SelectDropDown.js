import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

const SelectDropDown = (props) => {
  const  {label, name , options, ...rest} = props
  
  return (
    <div style={{display:"flex", flexDirection : "column", textAlign:"left", margin:"5px", height:"50px",   width:"250px"}}>
<label htmlFor={name}>{label}</label>
        <Field as="select" id ={name} name={name} {...rest}>
        {
              options.map(option=>{
                return( 
                    <option key={option.value} value ={option.value}>{option.key}</option>
            )
            }
)        }</Field>
<ErrorMessage name={name} component={TextError}/>
  </div>
  )
}

export default SelectDropDown