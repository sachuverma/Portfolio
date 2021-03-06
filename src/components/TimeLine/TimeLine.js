import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';

import { GridContainer } from '../Projects/ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

import { TimeLineData, coding } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I am an aspiring web developer with, having excellent problem solving skills. I am quite passionate about learning and being good at what I do. <br/>
        
        I consistently demonstrate a can-do attitude and embrace tough challenges with energy and enthusiasm. I am always on the lookout for opportunities to collaborate on new ideas and technologies. <br/> <br/>

        Skills : <br/>
        Data Structures and Algorithms, Competitive Programming, C++ <br/>
        HTML5, Cascading Style Sheets, Bootstrap, JavaScript, React.js, Node.js, Embedded JavaScript (EJS), PHP, MongoDB, MySQL, React Native, Electron, Gatsby, Django, Flask, MERN, LESS, SASS, jQuery, PostgreSQL, Git, GitHub, AJAX, REST API, Grunt , Netlify <br/>

        <br/>
      </SectionText>


      {/* <SectionText>
        <h2>My Timeline: </h2>
      </SectionText> */}

      {/* <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}>
                <CarouselItemTitle>
                  {`${item.year}`}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer> */}

      {/* <CarouselButtons>
        {TimeLineData.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button">
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons> */}
      
      
      <div>
        <h2>Competitive Programming: </h2>
      </div>
      

      <GridContainer style={{ lineHeight: "25px", marginTop: "-5px"}}>
        {coding.map((codingItems, index) => {
          return (
            <div key={index}>
              <div style={{marginBottom: "10px", fontSize: "2.1rem"}}>
                {index == 0 ? <h3> Achievements / Ranks: </h3> : <h3> Coding Handles: </h3> }
              </div>
              {
                codingItems.map((codingItem, idx) => {
                  return <div key={idx}>
                    -&ensp; <a style={{textDecoration: "none", color: "#ADAFB4"}} href={codingItem.url}> {codingItem.name} : {codingItem.rating} </a>
                  </div>
                })
              }
            </div>
          );
        })}
      </GridContainer>
      <br />
      <br />

      <SectionDivider />
    </Section>
  );
};

export default Timeline;
