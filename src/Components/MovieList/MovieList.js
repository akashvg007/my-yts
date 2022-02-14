import React, { useEffect, useState } from "react";
import yts from "yts";
import "./MovieList.css";
import { Card } from "../Card/Card";
import { Grid } from "@mui/material";

export const MovieList = ({ query = "movie", setPageData, page, select }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const obj = {
      limit: 12,
      query_term: "",
      genre: "",
      quality: "",
      page,
      sort_by: "like_count",
    };
    const filter = query.split(">");
    console.log("filter", filter, obj);
    if (filter.length > 1 && obj.hasOwnProperty(filter[0])) {
      obj[filter[0]] = filter[1];
    } else obj.query_term = query;
    const res = await yts.listMovies(obj);
    const { limit, movie_count, page_number, movies } = res;
    setPageData({ limit, movie_count, page_number });
    console.log(res);
    select(movies[0]);
    movies ? setMovies(movies) : setMovies([]);
  };
  useEffect(() => {
    fetchMovies();
  }, [query, page]);
  return (
    <div className="container">
      <Grid container spacing={2}>
        {movies.map((m) => (
          <Grid key={m.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Card movie={m} select={select} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
