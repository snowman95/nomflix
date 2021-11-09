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
const Logo = styled.img`
  width: 50px;
  height: auto;
`;
const Text = styled.div`
  color: black;
`;
const Production = ({ data }) => {
  return (
    <Container>
      {data.map(
        (item) =>
          // <Text>{`${item.name}`}</Text>
          item.logo_path && (
            <Logo
              key={item.id}
              src={`https://image.tmdb.org/t/p/w300${item.logo_path}`}
            ></Logo>
          )
      )}
    </Container>
  );
};

export default Production;
