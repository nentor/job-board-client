import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterLeft>
          <Work>We work remotely</Work>

          <br />
          <br />

          <Text>
            We strongly encourage employers to embrace diversity, equity, and
            inclusion as fundamental values when hiring through We Work
            Remotely.
            <Anchor>Get in touch</Anchor>
          </Text>
        </FooterLeft>

        <MobileFooter>
          <br />
          <br />
          <AnchorMobile>Top 100 Companies</AnchorMobile>
          <br />
          <AnchorMobile>All Remote Companies</AnchorMobile>
          <br />
          <AnchorMobile>WWR FAQ</AnchorMobile>
          <br />
          <AnchorMobile>Newsletter</AnchorMobile>
          <br />
          <AnchorMobile>Blog</AnchorMobile>
          <br />
          <AnchorMobile>Learning Portal</AnchorMobile>
          <br />
          <AnchorMobile>Forum</AnchorMobile>
          <br />
          <AnchorMobile>RSS</AnchorMobile>
          <br />
          <AnchorMobile>Terms</AnchorMobile>
          <br />
          <AnchorMobile>Privacy</AnchorMobile>
          <br />
          <AnchorMobile>Guidelines</AnchorMobile>
          <br />
          <br />
          <HTotal>15,479</HTotal>
          <span>Remote jobs posted</span>

          <LiMobile>Copyright © 2020</LiMobile>
        </MobileFooter>

        <FooterRight>
          <Number>15,293</Number>

          <Job>Remote jobs posted</Job>

          <br />

          <Button>Post a job</Button>

          <br />
          <br />

          <Bottom>
            Back to top ↑
            <br />
          </Bottom>
        </FooterRight>
      </FooterTop>

      <ResourcesBanner>
        <Resources>
          <Ul>
            <Li>
              <Anchor1>
                Top 100 Companies
                <Span>•</Span>
              </Anchor1>
            </Li>
            <Li>
              <Anchor1>
                All Remote Companies
                <Span>•</Span>
              </Anchor1>
            </Li>

            <Li>
              <Anchor1>
                WWR FAQ
                <Span>•</Span>
              </Anchor1>
            </Li>

            <Li>
              <Anchor1>
                Learning Portal
                <Span>•</Span>
              </Anchor1>
            </Li>

            <Li>
              <Anchor1>
                Blog
                <Span>•</Span>
              </Anchor1>
            </Li>

            <Li>
              <Anchor1>
                Forum
                <Span>•</Span>
              </Anchor1>
            </Li>

            <Li>
              <Anchor1>RSS</Anchor1>
            </Li>
          </Ul>
        </Resources>
      </ResourcesBanner>

      <BannerResources>
        <Banner>
          <Ul1>
            <Li1>
              <H1>
                Copyright © 2020
                <Span2>•</Span2>
              </H1>
            </Li1>

            <Li1>
              <Anchor2>
                Terms
                <Span2>•</Span2>
              </Anchor2>
            </Li1>

            <Li1>
              <Anchor2>
                Privacy
                <Span2>•</Span2>
              </Anchor2>
            </Li1>

            <Li>
              <Anchor2>Guidelines</Anchor2>
            </Li>
          </Ul1>
        </Banner>
      </BannerResources>
    </FooterContainer>
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
`
const FooterLeft = styled.div`
  padding-top: 25px;
  flex-basis: 50%;
`

const AnchorMobile = styled.a`
  text-align: center;
  cursor: pointer;
  color: #f8f9fa;
  line-height: 30px;
  font-size: 1.2em;
`

const HTotal = styled.span`
  margin-right: 10px;
`

const LiMobile = styled.div`
  padding-top: 40px;
  color: #fff;
  font-size: 1rem;
`

const MobileFooter = styled.div`
  font-size: 16px;
  color: white;
  font-family: 'Neufile Grotesk Regular', sans-serif;

  @media (min-width: 768px) {
    display: none;
  }
`

const FooterTop = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 600px) {
    text-align: center;
    display: flex;
    flex-direction: column;
  }
`

const Work = styled.h1`
  /* font-size: large; */
  color: rgba(255, 255, 255, 0.8);
`

const Text = styled.p`
  /* font-size: large; */
  color: rgba(255, 255, 255, 0.8);
`

const Anchor = styled.div`
  cursor: pointer;
  color: #f03e3e;
  margin-top: 4px;
  font-weight: 900;
  line-height: 2.5;
  font-size: 16px;

  @media (max-width: 600px) {
    text-align: center;
    padding-right: 40px;
  }
`

const FooterRight = styled.div`
  color: #9b9b9b;
  display: block;
  float: right;
  padding-top: 25px;
  font-family: 'Neufile Grotesk Regular', sans-serif;
`

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
  font-weight: 500;

  @media (max-width: 600px) {
    display: none;
  }
`

const Button = styled.button`
  background-color: #f03e3e;
  color: white;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 10px;
  outline: none;

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
`
const ResourcesBanner = styled.div`
  text-decoration: none;
  font-size: 62.5%;
  display: block;
  text-size-adjust: 100%;
  margin-top: 41px;
  box-shadow: 0px 0px 2px;
  z-index: 10;
  top: 234px;
  background: #4d5154;
`

const Resources = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: #696969;

  @media (max-width: 600px) {
    display: none;
  }
`

const Ul = styled.ul`
  // font size v procenti ti zabranqvam
  font-size: 150%;
  display: inline-flex;
`

const Li = styled.li`
  list-style-type: disc;
  display: flex;
  // vinagi v HEX i.e. #111, #222, #eee, never black, white, purple, whatever
  color: black;
`

// Remove
const Anchor1 = styled.div`
  font-family: 'Neufile Grotesk Regular', sans-serif;
  list-style-type: disc;

  white-space: nowrap;
  cursor: pointer;
  // remove all text decorations where necessary
  text-decoration: none !important;
  color: white;
`

const BannerResources = styled.div`
  font-family: 'Neufile Grotesk Regular', sans-serif;
  font-size: 62.5%;
  display: block;
  background: white;
  top: 235px;
  padding-right: 10px;
  width: 110%;
  box-shadow: 0px 0px 2px;
  z-index: 11;

  @media (max-width: 600px) {
    display: none;
  }
`

const Banner = styled.div`
  // font size should be in pixels or rems
  font-size: 62.5%;
  display: flex;
  // more appropriate place for this content
  justify-content: flex-start;

  @media (max-width: 600px) {
    display: none;
  }
`

const Ul1 = styled.ul`
  font-size: 150%;
  padding-inline-start: 20px;
  display: inline-flex;
  // colors should be in hex
  color: black;
`

const H1 = styled.a`
  font-size: 1.6em;
  white-space: nowrap;
  color: black;
`

const Li1 = styled.li`
  /* list-style-type: disc; */
  text-size-adjust: 100%;
  display: flex;
  color: black;
`

const Anchor2 = styled.div`
  white-space: nowrap;
  cursor: pointer;
  text-size-adjust: 100%;
  font-size: 1.6em;
  color: black;

  @media (max-width: 600px) {
    display: none;
  }
`

const Span = styled.span`
  font-family: 'Neufile Grotesk Regular', sans-serif;

  color: #f8f9fa;
  padding: 0 24px 0 24px;

  @media (max-width: 600px) {
    display: none;
  }
`

const Span2 = styled.span`
  color: black;
  margin-left: 15px;
  margin-right: -5px;
`
