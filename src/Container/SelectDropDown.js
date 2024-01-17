import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

const SelectDropDown = (props) => {
  const  {label, name ,lstyle,fstyle,dstyle, options, ...rest} = props
  
  return (
    <div style={dstyle}>
<label htmlFor={name} style={lstyle}>{label}</label>
        <Field as="select" style={fstyle} id ={name} name={name} {...rest}>
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