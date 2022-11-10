import { HttpClient } from "./HttpClient";
import { SearchServiceImpl } from "./SearchService";

const httpClient = new HttpClient("http://localhost:4000");
export const getSearchResultsService = new SearchServiceImpl(httpClient);
