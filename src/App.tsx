import React from "react";
import { SearchAPI } from "./api/SearchAPI";
import Search from "./components/Search/Search";
import { CacheService } from "./service/CacheService";

const cahceInstace = new CacheService();
export const searchAPI = new SearchAPI("http://localhost:4000/", cahceInstace);

function App() {
  return <Search />;
}

export default App;
