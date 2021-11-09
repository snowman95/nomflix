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
const Text = styled.div`
  color: black;
  font-weight: 700;
`;
const Production = ({ data }) => {
  console.log(data);
  return (
    <Container>
      {data.map((item) => item.name && <Text>{item.name}</Text>)}
    </Container>
  );
};

export default Production;
