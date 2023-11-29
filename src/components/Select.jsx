import React,{useId,forwardRef} from 'react';
import { FormContainer,Label,Input,Select} from '../styles';


const Select = ({
    label,
    className= "",
    options,
    ...props
},ref) => {
    const id = useId()
  return (
    <FormContainer>
    {label && (<Label></Label>)}
    <Select {...props} id={id} ref={ref}>
        {options?.map((option) =>{
            <options key={option} value={option}>{option}</options>
        })}
    </Select>
    </FormContainer>
  )
}

export default forwardRef(Select)
