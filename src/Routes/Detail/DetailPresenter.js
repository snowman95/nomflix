import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import noPoster from "../../assets/noPosterSmall.jpg";
import Helmet from "react-helmet";
import Message from "Components/Message";
import Slider from "Components/Slider";

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
  display: grid;
  grid-template-columns: 1fr;
`;

const Info = styled.div``;
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

const Videos = styled.div`
  /* display: flex;
  justify-content: space-between;
  gap: 10px; */
`;

const IMDBLinkButton = styled.button`
  margin-top: 15px;
  &:hover {
    font-weight: 700;
  }
  border: none;
`;

const DetailPresenter = ({ result, loading, error }) => (
  <>
    <Helmet>
      <title>Loading | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : error ? (
      <Message color="#e74c3c" text={error} />
    ) : (
      <Container>
        <Helmet>
          <title>
            {result.title ? result.title : result.original_title} | Nomflix
          </title>
        </Helmet>
        <Backdrop
          bgImage={
            result
              ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
              : `${noPoster}`
          }
        ></Backdrop>
        <Content>
          <Cover
            bgImage={
              result
                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                : `${noPoster}`
            }
          />
          <Data>
            <Info>
              <Title>
                {result.title ? result.title : result.original_title}
              </Title>
              <ItemContainer>
                <Item>
                  {result.release_date
                    ? result.release_date.substring(0, 4)
                    : result.first_air_date.substring(0, 4)}
                </Item>
                <Divider>▪</Divider>

                <Item>
                  {result.runtime ? result.runtime : result.episode_run_time[0]}{" "}
                  min
                </Item>
                <Divider>▪</Divider>

                <Item>
                  {result.genres &&
                    result.genres.map((genre, index) =>
                      index === result.genres.length - 1
                        ? genre.name
                        : `${genre.name} / `
                    )}
                </Item>
              </ItemContainer>
              <Overview>{result.overview}</Overview>

              <IMDBLinkButton
                onClick={() => {
                  window.open(
                    `https://www.imdb.com/title/${result.imdb_id}`,
                    "_blank"
                  );
                }}
              >
                🎥Show more
              </IMDBLinkButton>
            </Info>
            <Videos>
              <Slider data={result?.videos?.results} />
            </Videos>
          </Data>
        </Content>
      </Container>
    )}
  </>
);

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
export default DetailPresenter;
