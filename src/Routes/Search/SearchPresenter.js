import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 0px 20px;
`;
const Form = styled.form`
  width: 100%;
  margin-bottom: 50px;
`;
const Input = styled.input`
  width: 100%;
  all: unset;
  font-size: 28px;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  handleSubmit,
  loading,
  error,
  updateTerm,
}) => (
  <Container>
    <Helmet>
      <title>Search | Nomflix</title>
    </Helmet>

    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or Tv Shows..."
        value={searchTerm}
        onChange={updateTerm}
      ></Input>
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date?.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}

        {tvResults && tvResults.length > 0 && (
          <Section title="TV Results">
            {tvResults.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date?.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
      </>
    )}
    {error && <Message color="#e74c3c" text={error} />}
    {tvResults &&
      movieResults &&
      tvResults.length === 0 &&
      movieResults.length === 0 && (
        <Message color="#95a5a6" text="Nothing found" />
      )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  updateTerm: PropTypes.func.isRequired,
};
export default SearchPresenter;
