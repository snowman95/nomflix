import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import YoutubeVideo from "./YoutubeVideo";

// * {box-sizing:border-box}

const SlideContainer = styled.div`
  width: 100%;
  position: relative;
  margin: auto;
  box-sizing: border-box;
`;
const fadeAnimation = keyframes`
  from {opacity: .4}
  to {opacity: 1}
`;
const Slide = styled.div`
  box-sizing: border-box;
  /* display: none; */
  ${(props) => props.active && ` animation: ${fadeAnimation} 1.5s; `}
`;

const Arrow = css`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border: none;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 0 3px 3px 0;
  user-select: none;
  box-sizing: border-box;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    color: black;
  }
`;
const Prev = styled.button`
  ${Arrow}
`;
const Next = styled.button`
  ${Arrow}
  right:0;
`;
const Text = styled.div`
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
`;

const DotContainer = styled.div`
  text-align: center;
`;
const DotBase = css`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  &:hover {
    background-color: #717171;
  }
`;
const Dot = styled.div`
  ${DotBase}
`;
const DotPoint = styled.div`
  ${DotBase}
  background-color : red;
`;
const active = styled.div`
  &:hover {
    background-color: #717171;
  }
`;
const Slider = ({ data: videos }) => {
  const videoLength = videos.length;
  const slideRef = useRef([]);
  const dotRef = useRef([]);
  const [slideIndex, setSlideIndex] = useState(0);

  // videos?.map((data, index) => (slideRef.current[index] = index));

  const handleFocus = (n) => {
    setSlideIndex((current) => {
      if (current + n > videoLength - 1) setSlideIndex(0);
      else if (current + n < 0) setSlideIndex(videoLength - 1);
      else setSlideIndex(current + n);
    });
  };

  return (
    <>
      <SlideContainer>
        {videos?.map((data, index) => (
          <Slide key={index} ref={() => (slideRef.current[index] = index)}>
            {slideIndex === index && (
              <YoutubeVideo
                id={data.key}
                width={window.screenX}
                height={window.screenY}
              />
            )}
          </Slide>
        ))}
        <Prev onClick={() => handleFocus(-1)}>&#10094;</Prev>
        <Next onClick={() => handleFocus(1)}>&#10095;</Next>
      </SlideContainer>
      <DotContainer>
        {videos?.map((data, index) =>
          slideIndex === index ? (
            <DotPoint
              key={index}
              ref={() => (dotRef.current[index] = index)}
              onClick={() => {
                setSlideIndex(index);
              }}
            />
          ) : (
            <Dot
              key={index}
              ref={() => (dotRef.current[index] = index)}
              onClick={() => {
                setSlideIndex(index);
              }}
            />
          )
        )}
      </DotContainer>
    </>
  );
};
export default Slider;
