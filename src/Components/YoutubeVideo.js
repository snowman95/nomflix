import React from "react";
import styled from "styled-components";

const YouTubeVideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
`;

const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const YoutubeVideo = ({ id }) => {
  return (
    <YouTubeVideoContainer>
      <IFrame
        frameborder="0"
        allowfullscreen="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="YouTube video player"
        src={`https://www.youtube.com/embed/${id}?autoplay=0&amp;enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=1`}
        id="widget2"
      ></IFrame>
    </YouTubeVideoContainer>
  );
};

export default YoutubeVideo;
