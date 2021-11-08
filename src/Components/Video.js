import styled from "styled-components";
const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 5fr;
`;
const VideoButton = styled.button`
  border: none;
  background-color: black;
  color: white;
  font-size: 100px;
  &:hover {
    border: 1px solid yellow;
  }
`;
const VideoText = styled.div`
  color: black;
`;
const basicURL = "https://www.youtube.com/watch?v=";

const Video = ({ data }) => {
  return (
    <VideoContainer>
      <VideoText>{`${data.name}`}</VideoText>
      <VideoButton
        onclick={window.open(`${basicURL}${data.key}`, "_blank")}
      ></VideoButton>
    </VideoContainer>
  );
};
export default Video;
