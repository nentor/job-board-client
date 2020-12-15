import React from 'react'
import styled from 'styled-components'
import {DesktopFooter} from './Components'
import {MobileFooter} from './Components'

export const Footer = ({data}) => {

  const ResourcesBannerData = [
    "Top 100 Companies",
      "All Remote Companies",
      "WWR FAQ",
      "Newsletter",
      "Blog",
      "Learning Portal",
      "Forum",
      "RSS",
    ]
  
    const BannerResourcesData = [
      "Copyright © 2020",
      "Terms",
      "Privacy",
      "Guidelines"
    ]
  
    const MobileFooterData = [
      "Top 100 Companies",
      "All Remote Companies",
      "WWR FAQ",
      "Newsletter",
      "Blog",
      "Learning Portal",
      "Forum",
      "RSS",
      "Terms",
      "Privacy",
      "Guidelines"
    ]

  


  return (
<div>
<FooterContainer>
  <DesktopFooter data ={ResourcesBannerData , BannerResourcesData}/>
</FooterContainer>

<MobileFooter>
  <MobileFooter data={MobileFooterData}/>
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


