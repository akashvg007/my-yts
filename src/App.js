import React, { useState, useEffect } from "react";
import "./App.css";
import { MovieList } from "./Components/MovieList/MovieList";
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  Pagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "./Components/Button/CustBtn";

function App() {
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const [pConfig, setPConfig] = useState({ movie_count: 1, limit: 1 });
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState({
    synopsis: "",
    title_english: "",
    torrents: [],
    large_cover_image: "",
  });
  const handleChange = (e) => {
    console.log("value value", e.target.value);
    setValue(e.target.value);
  };
  const search = () => {
    setQuery(value);
  };
  const setPageData = (config) => {
    setPConfig(config);
  };
  const pageChange = (event, value) => {
    setPage(value);
  };
  console.log("selected ", selected);
  return (
    <div className="App">
      <header className="App-header">
        <div>YTS</div>
        <div className="search">
          <form onSubmit={search} action="#" autoComplete="off">
            <OutlinedInput
              id="outlined-adornment-amount"
              value={value}
              onChange={handleChange}
              sx={{
                backgroundColor: "#fff",
                height: "40px",
                width: "100%",
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="search for movies"
                    onClick={search}
                    edge="end"
                  >
                    <SearchIcon color="success" />
                  </IconButton>
                </InputAdornment>
              }
            />
            <input type="submit" style={{ display: "none" }} />
          </form>
        </div>
        <div>Browse</div>
      </header>
      <main>
        <aside
          style={{
            backgroundImage: `url(${selected.large_cover_image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "auto auto",
          }}
        >
          <div className="text-wrapper">
            <div className="heading">{selected?.title_english}</div>
            <div className="wrapper">{selected?.synopsis}</div>
            <div className="heading">{"Download Links"}</div>
          </div>
          <section>
            <Button mode={1} btns={selected?.torrents} />
          </section>
        </aside>
        <section>
          <MovieList
            select={setSelected}
            page={page}
            setPageData={setPageData}
            query={query}
          />
        </section>
      </main>
      <footer>
        <Pagination
          onChange={pageChange}
          count={Math.ceil(pConfig?.movie_count / pConfig.limit)}
          variant="outlined"
          color="primary"
        />
      </footer>
    </div>
  );
}

export default App;
