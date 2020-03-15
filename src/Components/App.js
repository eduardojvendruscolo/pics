import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../Api/unsplash";
import { render } from "@testing-library/react";

class App extends React.Component {
  state = { images: [] };

  styleVar = {
    marginTop: "20px"
  };

  onSubmit = term => {
    unsplash
      .get("search/photos", {
        params: { query: term }
      })
      .then(data => {
        this.setState({ images: data.data.results });
      });
  };

  render() {
    return (
      <div className="ui container" style={this.styleVar}>
        <SearchBar onSubmit={this.onSubmit} />

        <h5
          style={{ backgroundColor: "lightgray" }}
        >{`${this.state.images.length} imagens`}</h5>
      </div>
    );
  }
}

export default App;
