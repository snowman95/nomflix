import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  gap: 20px;
  padding: 10px 0;
  border: 1px solid black;
`;
const Image = styled.img`
  height: 200px;
  border-radius: 4px;
  background-size: cover;
  background-position: center center;
  transition: opacity 0.1s linear;
  &:hover {
    opacity: 0.3;
  }
`;
const Season = ({ data }) => {
  return (
    <Container>
      {data.map(
        (item) =>
          // <Text>{`${item.name}`}</Text>
          item.poster_path && (
            <Image
              key={`${item.id}${item.season_number}`}
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
            />
          )
      )}
    </Container>
  );
};

export default Season;
