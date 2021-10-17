import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import noPoster from "../assets/noPosterSmall.jpg";
const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  border-radius: 4px;
  background-size: cover;
  background-position: center center;
  transition: opacity 0.1s linear;
`;
const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  margin-bottom: 3px;

  width: 100%;
  font-size: 12px;
  line-height: 14px;
  /* 글자 튀어나가는 부분 깔끔하게 처리 */
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  display: block;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({
  id,
  backdropImgUrl,
  posterImgUrl,
  title,
  rating,
  year,
  date,
  runtime,
  overview,
  isMovie = false,
}) => (
  <Link
    to={
      isMovie
        ? {
            pathname: `/movie/${id}`,
            state: {
              id,
              backdropImgUrl,
              posterImgUrl,
              title,
              rating,
              year,
              date,
              runtime,
              overview,
              isMovie,
            },
          }
        : {
            pathname: `/show/${id}`,
            state: {
              id,
              backdropImgUrl,
              posterImgUrl,
              title,
              rating,
              year,
              date,
              runtime,
              overview,
              isMovie,
            },
          }
    }
  >
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            posterImgUrl
              ? `https://image.tmdb.org/t/p/w300${posterImgUrl}`
              : `${noPoster}`
          }
        />
        <Rating>
          <span rol="img" aria-label="rating">
            ⭐
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  backdropImgUrl: PropTypes.string,
  posterImgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  overview: PropTypes.string,
};
export default Poster;
