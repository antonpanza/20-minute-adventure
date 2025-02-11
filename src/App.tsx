import { useState, useEffect } from 'react';
import SearchBar from "./components/SearchBar.js";
import CharacterCard from "./components/CharacterCard.js";
import StatusMessage from "./components/StatusMessage.js";

interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    created: string
    url: string;
}

function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (searchQuery.length < 3) {
            setCharacters([]);
            return;
        }

        const fetchCharacters = async () => {
            setLoading(true);
            setError("");
            try {
                const response = await fetch(
                    `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
                );

                if (!response.ok) {
                    throw new Error("The characters were not found.");
                }

                const data = await response.json();
                console.log(data.results);
                setCharacters(data.results);
            } catch (err) {
                setError("The characters were not found. 😞");
                setCharacters([]);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, [searchQuery]);

    return (
        <div className="max-w-[1596px] w-full m-auto">
            <SearchBar onSearch={setSearchQuery} />

            <StatusMessage
                loading={loading}
                error={error}
                charactersCount={characters.length}
                query={searchQuery}
            />

            <div className="flex flex-wrap justify-center m-auto gap-5 mx-10 my-17">
                {characters.map((char, index) => (
                    <CharacterCard key={char.id} character={char} index={index} />
                ))}
            </div>
        </div>
    );
}

export default App;
