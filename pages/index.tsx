import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Input } from "@/components/input";
import { Loading } from "@/components/loading";
import { Navbar } from "@/components/navbar";
import { Title } from "@/components/title";
import { useEffect, useState } from "react";

interface IValue {
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  episode: Array<string>;
};

type ValueTypes = Array<IValue>;

export default function Home() {
  const [characters, setCharacters] = useState<ValueTypes>([]);
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<IValue[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSearch() {
    const filteredResults = characters.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()));
    setSearchResults(filteredResults);
  }

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
        .then(data => {
          setIsLoading(false);
        })
        .catch(error => {
          setIsLoading(false);
        });
    }, 4000);
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
        <Title />
        <div style={{ display: "flex", border: "1px solid #000", width: "max-content", borderRadius: "5px" }}>
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <Button onClick={() => handleSearch()} />
        </div>
      </div>
      {isLoading ? (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "50px" }}>
          <Loading />
        </div>
      ) : (
        searchResults.length > 0 ? (
          <Card data={searchResults} />
        ) : (
          <Card data={characters} />
        )
      )}
    </>
  )
}
