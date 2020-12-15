import React from 'react'
import { worker } from 'shortid'
import styled from 'styled-components'
import {DesktopFooter} from './Components'
import {MobileFooter} from './Components'

export const Footer = ({data}) => {


  return (
<div>
<FooterContainer>
  <DesktopFooter/>
</FooterContainer>

<MobileFooter>
  <MobileFooter/>
</MobileFooter>

</div>
 )
 
}

export default Footer

const FooterContainer = styled.div`
text-size-adjust: 100%;
color: #9b9b9b;
background: #212529;
overflow: hidden;
width: 100vw;
flex-direction: column;


  @media (max-width: 600px) {
    text-align: center;
  }
`;

