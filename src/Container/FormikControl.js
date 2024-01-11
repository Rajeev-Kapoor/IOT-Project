import React from 'react'
import Input from './Input'
// import InputTextArea from './InputTextArea'
 import SelectDropDown from './SelectDropDown'
// import Radiobutton from './Radiobutton'
// import Checkbox from './Checkbox'
// import Datepicker from './Datepicker'
// import FileUpload from './ImageUpload'


const FormikControl = (props) => {
    const{control,...rest}=props
    switch(control){
    case "input": return <Input {...rest}/>
    // case "textArea": return <InputTextArea  {...rest}/>
         case "select": return <SelectDropDown {...rest}/>
    //         case"radio": return <Radiobutton {...rest}/>
    //         case "checkbox": return <Checkbox  {...rest}/>
    //             case "date":    return <Datepicker {...rest}/>
    //              case "image" : return <FileUpload {...rest}/>   
                default :return null


}

}

export default FormikControl