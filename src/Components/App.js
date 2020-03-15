import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import { render } from "@testing-library/react";

class App extends React.Component {
  state = { images: [] };

  styleVar = {
    marginTop: "20px"
  };

  onSubmit = term => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization: "Client-ID uo6AnxFTBSs2di1uPneZXe9hKz3sg1BanYkuNUQR0i8"
        }
      })
      .then(data => {
        this.setState({ images: data.data.results });
      });
  };

  render() {
    return (
      <div className="ui container" style={this.styleVar}>
        <SearchBar onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
