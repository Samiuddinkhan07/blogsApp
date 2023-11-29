import styled, { createGlobalStyle } from "styled-components";






export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 95%;
    margin:0 auto;
`

export const NavContainer = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 20px 10px;
    color:#fff;
    align-items: center;
    .logo-section{
        flex:1;
        font-family: "Bebas",sans-serif;
       
    }
    .nav-links{
        display: flex;
        list-style-type: none;
        li{
            padding: 0px 5px;
            cursor: pointer;
        }
    }
`
export const FooterContainer = styled.div`
    /* border-top:1px solid; */
`

export const PageContainer = styled.div`
    height: 100%;
    width: 100%;

`


export const Button = styled.button`
    padding: 4px 8px;
    outline:none;
    border:1px solid transparent;
    border-radius: 3px;
    background-color:transparent ;
    color: #fff;
    cursor: pointer;
    font-size:16px;
    &:hover{
        outline:2px solid #fff;
        offset: 2px;
       };
`;


export const FormContainer = styled.div`
    width: 100%;
`

export const Label = styled.label`
    display: inline-block;
`

export const Input = styled.input`
    border:1px solid #fff;
    padding:4px 10px;
    outline:none;
    border-radius: 4px;
`

export const Select = styled.select`
     border:1px solid #fff;
    padding:4px 10px;
    outline:none;
    border-radius: 4px;
`
export const PostCardContainer = styled.div`
    display: flex;
    flex-direction: column;
`