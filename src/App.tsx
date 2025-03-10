import { useState } from "react";

import "./App.css";
import { products } from "../utils/db";

import ModeSwitch from "./components/mode-switch";
import Navbar from "./components/Navbar";

import SearchBar from "./components/Search";
import ResultCard from "./components/ResultCard";

import { Product } from "../utils/types";
import LayoutWrapper from "./components/LayoutWrapper";
import { CircleSlash2 } from "lucide-react";
import Header from "./components/Header";
import AddResultsForm from "./components/AddResultsForm";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const addResults: boolean = false;

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const search = (event.target as HTMLFormElement).input.value.toLowerCase();
    console.log(search);
    setSearchTerm(search);

    const filtered = products.filter((product: Product) => {
      if (search) {
        return (
          product.product.toLowerCase().includes(search) ||
          product.company.toLowerCase().includes(search)
        );
      }
    });
    (event.target as HTMLFormElement).input.value = "";
    setResults(filtered);
  }

  return (
    <>
      <LayoutWrapper>
        <Navbar>
          <p className="text-3xl font-bold">
            <CircleSlash2 />
          </p>
          <ModeSwitch />
        </Navbar>
        <Header />
        <SearchBar handleSearch={handleSearch}></SearchBar>
        <div className="flex flex-col gap-5">
          {results.length > 0 ? (
            <>
              <h3>Showing search results for: "{searchTerm}"</h3>
              {results.map((result) => {
                return <ResultCard result={result} key={result.id} />;
              })}
            </>
          ) : (
            <p>No results</p>
          )}
        </div>
        {addResults ? <AddResultsForm /> : null}
      </LayoutWrapper>
    </>
  );
}

export default App;
