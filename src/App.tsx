import React from "react";
import { Cache } from "./api/Cache";
import { SearchAPI } from "./api/SearchAPI";
import Search from "./components/Search/Search";

const cahceInstace = new Cache();
export const searchAPI = new SearchAPI("http://localhost:4000/", cahceInstace);

function App() {
  return <Search />;
}

export default App;
