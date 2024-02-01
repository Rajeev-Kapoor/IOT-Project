import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

const Input = (props) => {
    const {label ,type,name,dstyle,lstyle,fstyle,estyle, ...rest} = props


    return (
    <div style={dstyle}>
    <label htmlFor={name} style={lstyle}>{label}  </label>
    <Field style = {fstyle}  id ={name} name={name}{...rest}></Field>
    <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Input