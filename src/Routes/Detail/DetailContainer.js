import { moviesApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = this.props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    let result = "null";
    const { isMovie } = this.state;
    const parseId = parseInt(id);
    if (isNaN(parseId)) {
      return push("/");
    }
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parseId));
      } else {
        ({ data: result } = await tvApi.showDetail(parseId));
      }
    } catch {
      this.setState({ error: "Can't find anything" });
    } finally {
      this.setState({ loading: false, result });
      console.log(result);
    }
  }

  render() {
    const { result, isMovie, error, loading } = this.state;
    return (
      <DetailPresenter
        result={result}
        isMovie={isMovie}
        error={error}
        loading={loading}
      />
    );
  }
}
