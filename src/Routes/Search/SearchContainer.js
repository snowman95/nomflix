import { moviesApi, tvApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "code",
    error: null,
    loading: true,
  };
  componentDidMount() {
    this.handleSubmit();
  }

  searchByTerm = async () => {
    const { serachTerm } = this.state;
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(serachTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(serachTerm);
      this.setState({
        movieResults,
        tvResults,
      });
      this.setState({ loading: true });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
