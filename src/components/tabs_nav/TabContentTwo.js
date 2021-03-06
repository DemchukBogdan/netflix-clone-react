import React from "react";
import { Button } from "../Button";
import styled from "styled-components";
import ImgTv from "../images/tab-tv.png";
import ImgTablet from "../images/tab-tablet.png";
import ImgMacbook from "../images/tab-macbook.png";
import { generateMedia } from 'styled-media-query'
function TabContentTwo(props) {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{ fontSize: "1.5rem" }}>
            Watch TV shows and movies anytime, anywhere - personalized for you.
          </span>
          <Button className="btn">try it now</Button>
        </div>
        {/* Tab Bottom Content */}
        <div className="tab-bottom-content">
          {/* TV Img */}
          <div>
            <img src={ImgTv} style={{width: '18.75rem'}}/>
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.
            </p>
          </div>
        
        
          {/* TV Tablet */}
          <div>
            <img src={ImgTablet} style={{width: '18.75rem', paddingTop: '0.625rem', paddingBottom: '0.625rem'}}/>
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.
            </p>
          </div>
        
        
          {/* TV Macbook */}
          <div>
            <img src={ImgMacbook} alt='mac' style={{width: '18.75rem', paddingTop: '0.625rem', paddingBottom: '0.625rem'}}/>
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.
            </p>
            </div>
        </div>
      </div>
    </TabContainer>
  );
}

export default TabContentTwo;

// Media
const customMedia = generateMedia({
  lgDesktop: '1350px',
  mdDesktop: "1000px",
});



//Main Tab Content
const TabContainer = styled.div`
  background: var(--main-deep-derk);

  .tab-content {
    margin: 0 15%;
  }

  // Tab Top Content
  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-item: center;
    padding: 2.5rem 0;
    ${customMedia.lessThan("mdDesktop")`
    grid-template-columns: repeat(2, 1fr);
    
    `}
    ${customMedia.lessThan("tablet")`
    grid-template-columns:  1fr;
    text-align: center;
    row-gap: 1.5rem;
    `}
  }

  span {
    grid-column: 1/8;
    ${customMedia.lessThan("tablet")`
    grid-template-columns:  1/ -1;
    font-sizw: 1.5rem;
    `}
  }

  .btn {
    margin: 0 1, 25rem 1.25rem;
    grid-column: 10/12;
    ${customMedia.lessThan("tablet")`
    grid-template-columns:  1/ -1;
    margin-left: 30%;
    margin-right: 30%;
    `}
  }

  imh{
    width: 100%;
  }

  // Tab Bottom Content
  .tab-bottom-content{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
      text-align: center;
      margin-top: 2rem;
      ${customMedia.lessThan("tablet")`
    grid-template-columns:  1fr;
    font-sizw: 1.5rem;
    `}
  }

  h3{
      margin: 0.5rem 0;
  }


p{
    color: var(--main-grey)
}

`;
