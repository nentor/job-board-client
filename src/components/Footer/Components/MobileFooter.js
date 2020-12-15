import React from 'react'
import styled from 'styled-components'

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

const DataMobile = {
  total: "15,511",
  span: "Job Posted",
  copy: " Copyright © 2020 "

}

  export const MobileFooter = ({data}) => {
    return (
  <Container>

         
          {MobileFooterData.map((element) => (
            <>

            <AnchorMobile>{element}</AnchorMobile>
    
    <br/>
            </>
          ))}

          <br/>
          <br/>
  
          <HTotal>{DataMobile.total}</HTotal>
          <Span>{DataMobile.span}</Span>


          <br/>
          <br/>
          <br/>

          <LiMobile>{DataMobile.copy}</LiMobile>
        </Container>
    )}

const AnchorMobile = styled.span`
text-align: center;
cursor: pointer;
color: #f8f9fa;
line-height: 30px;
font-size: 1.2em;
`;

const LiMobile = styled.span`
color: #fff;
font-size: 1rem;

`;

const Container = styled.div`
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const HTotal = styled.span`
  margin-right: 10px;
  font-size: 1rem;    
  color: #f8f9fa;
`;

const Span = styled.span`
color: #f8f9fa;
font-size: 1rem;
`;