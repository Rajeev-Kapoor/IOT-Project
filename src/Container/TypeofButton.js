import React from 'react'
import OnOff from './OnOff';
import { Regulator } from './Regulator';


const TypeofButton = (props) => {
    const{control,...rest}=props
switch (control) {
    case '1': return<OnOff{...rest}/>;
        case'2':return<Regulator {...rest}/>
        

    default: return null;
        
  
}
}
export default TypeofButton