import React,{useId, forwardRef} from 'react'
import {FormContainer,Input,Label,} from '../styles'

const Input = forwardRef(function Input ({
    type= "text",
    label,
    className = "",
    ...props,
},ref)
{
    const id = useId()
    return (
        <FormContainer>
            <Label htmlFor={id}>
                {label}
            </Label>
            <Input type={type} ref={ref} {...props} id={id}>
            </Input>
        </FormContainer>
    )
})


export default Input
