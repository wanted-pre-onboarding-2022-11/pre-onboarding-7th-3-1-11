import React from "react";
import { SearchAPI } from "./api/SearchAPI";
import Search from "./components/Search/Search";
export const searchAPI = new SearchAPI("http://localhost:4000/");

function App() {
  return <Search />;
}

export default App;
