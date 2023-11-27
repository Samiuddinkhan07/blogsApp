import React from 'react';
import styled from 'styled-components';


const Footer = () => {
  return (
    <FooterInner>
      <div className='logo-content'>
        sfds
      </div>
      <div className="text-content">
            afafagae
      </div>
    </FooterInner>
  )
}

export default Footer


const FooterInner = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    margin:0 auto;
    justify-content: space-between;
    .logo-content{
        flex:1 0 0;
    }
    .text-content{
        flex:1;
    }
`
