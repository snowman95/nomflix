import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import noPoster from "../../assets/noPosterSmall.jpg";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10ex;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;
const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const DetailPresenter = ({ result, loading, error }) => loading;
// ? (
//   <Loader />
// ) : (
//   <Container>
//     <Backdrop
//       bgImage={
//         result
//           ? `https://image.tmdb.org/t/p/original${result.backdropImgUrl}`
//           : `${noPoster}`
//       }
//     ></Backdrop>
//     <Content>
//       <Cover
//         bgImage={
//           result
//             ? `https://image.tmdb.org/t/p/original${result.posterImgUrl}`
//             : `${noPoster}`
//         }
//       />
//       <Data>
//         <Title>{result.title ? result.title : result.original.name}</Title>
//         <ItemContainer>
//           <Item>{result.year}</Item>
//           <Divider>▪</Divider>
//           {/*구현 불가 <Item>
//             {result.genres &&
//               result.genres.map((genre, index) =>
//                 index === result.genres.length - 1
//                   ? genre.name
//                   : `${genre.name}`
//               )}
//           </Item> */}
//           {/* 구현 불가
//           <Item>{result.runtime} min</Item>
//           <Divider>▪</Divider> */}
//         </ItemContainer>
//         <Overview>{result.overview}</Overview>
//       </Data>
//     </Content>
//   </Container>
// );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
export default DetailPresenter;
