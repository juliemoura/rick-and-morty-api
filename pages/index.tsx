import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Input } from "@/components/input";
import { Navbar } from "@/components/navbar";
import { Title } from "@/components/title";
import { useEffect, useState } from "react"

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

    // setTimeout(() => {
    //   fetch('https://rickandmortyapi.com/api/character')
    //     .then(response => response.json())
    //     .then(data => setCharacters(data.results))
    // })

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

      {searchResults.length > 0 ? (
        <Card data={searchResults} />
      ) : (
        <Card data={characters} />
      )}
      {/* {isLoading ? (
        <h1>carregando</h1>
      ) : (
        searchResults.map((item, key) => (
          <div key={key}>
            <h1 style={{ color: "black" }}>{item.id}</h1>
            <h2 style={{ color: "black" }}>{item.name}</h2>
            <h3 style={{ color: "black" }}>{item.status}</h3>
            <h4 style={{ color: "black" }}>{item.species}</h4>
            <h4 style={{ color: "black" }}>{item.gender}</h4>
            <img src={item.image} />
            <h5 style={{ color: "black" }}>{item.episode.length}</h5>
          </div>
        ))
      )} */}
    </>
    // <>
    //   <h1 style={{ color: "black" }}>
    //     Buscar personagem
    //   </h1>
    //   <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    //   <button onClick={() => handleSearch()}>buscar</button>
    //   {searchResults.length > 0 ? (
    //     searchResults.map((item, key) => (
    //       <div key={key}>
    //         <h1 style={{ color: "black" }}>{item.id}</h1>
    //         <h2 style={{ color: "black" }}>{item.name}</h2>
    //         <h3 style={{ color: "black" }}>{item.status}</h3>
    //         <h4 style={{ color: "black" }}>{item.species}</h4>
    //         <h4 style={{ color: "black" }}>{item.gender}</h4>
    //         <img src={item.image} />
    //         <h5 style={{ color: "black" }}>{item.episode.length}</h5>
    //       </div>
    //     ))
    //   ) : (
    //     <p style={{ color: "black" }}>Nenhum resultado encontrado</p>
    //   )}
  )
}
