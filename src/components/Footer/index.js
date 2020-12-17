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

    const footerData = {
      name: "We work remotely",
      anchor: "Get in touch",
      number: "19 000",
      job: "Remote jobs posted",
      button: "Post a job",
      bottom: "Back to top ↑" ,
      text: "We strongly encourage employers to embrace diversity, equity, and inclusion as fundamental values when hiring through We Work Remotely."
    }


  return (
<div>
<FooterContainer>
<DesktopFooter ResourcesBannerData = {ResourcesBannerData}  BannerResourcesData = {BannerResourcesData } 
footerData = {footerData}/>


  <MobileFooter>
  <MobileFooter data={MobileFooterData}/>
</MobileFooter>

</FooterContainer>



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
  padding-bottom: 10px;
}
`;


