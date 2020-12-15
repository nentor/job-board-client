import React from 'react'
import { worker } from 'shortid'
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
    total: "15,293",
    copy: "Copyright © 2020",
    span: "Remote jobs posted"
  }

  export const MobileFooter = ({data}) => {
  <MobileFooter>
          <br />
          <br />
          {MobileFooterData.map((element) => (
            <>

            <AnchorMobile>{element}</AnchorMobile>
      
            <br />
            </>
          ))}
    
    
          <br />
          <br />
          <HTotal>{DataMobile.total}</HTotal>
          <span>{DataMobile.span}</span>

          <LiMobile>{DataMobile.copy}</LiMobile>
        </MobileFooter>
  }


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


const LiMobile = styled.div`
  padding-top: 40px;
  color: #fff;
  font-size: 1rem;
`;

const MobileFooter = styled.div`
  font-size: 16px;
  color: #ffffff;
  font-family: 'Neufile Grotesk Regular', sans-serif;


  @media (min-width: 768px) {
    display: none;
  }
`;

const HTotal = styled.span`
  margin-right: 10px;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 600px) {
    text-align: center;
    display: flex;
    flex-direction: column;
  }
`;

const Anchor = styled.div`
  cursor: pointer;
  color: #f03e3e;
  margin-top: 4px;
  line-height: 2.5;
  font-size: 16px;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    text-align: center;
    padding-right: 40px;
  }
`;

const Number = styled.div`
  text-align: right;
  font-family: 'Neufile Grotesk Semi Bold', sans-serif;
  font-weight: 500;
  font-size: 2rem;
  color: #f8f9fa;

  @media (max-width: 600px) {
    display: none;
  }
`

const Job = styled.div`
  text-align: right;
  color: #f8f9fa;
  letter-spacing: 1px;
  font-size: 1.1em;
 

  @media (max-width: 600px) {
    display: none;
  }
`

const Button = styled.button`
  background-color: #f03e3e;
  color: #ffffff;
  border: none;
  padding: 15px 32px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  outline: none;
  text-align: center;
  

  &:hover {
    opacity: 0.7;

  }
  

  @media (max-width: 600px) {
    display: none;
  }
`

const Bottom = styled.h1`
  text-align: right;
  cursor: pointer;
  color: #ffffff;
  font-size: 15px;

  @media (max-width: 600px) {
    display: none;
  }
`;


const Span = styled.span`
  font-family: 'Neufile Grotesk Regular', sans-serif;
  color: #f8f9fa;
  padding: 10px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const BannerResources = styled.div`
  font-family: 'Neufile Grotesk Regular', sans-serif;
  font-size: 30px;
  display: block;
  background:  #FFFAFA;
  top: 235px;
  padding-right: 10px;
  width: 110%;
  

  @media (max-width: 600px) {
    display: none;
  }
`;

const Banner = styled.div`
display: flex;
justify-content: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Anchor2 = styled.div`
  cursor: pointer;
  font-size: 10px;
  color: #000000;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;