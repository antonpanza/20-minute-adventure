import {useState, useEffect} from 'react'
import SearchBar from "./components/SearchBar";
import CharacterCard from "./components/CharacterCard";
import StatusMessage from "./components/StatusMessage";

function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (searchQuery.length < 3) return;

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
        <>
            <SearchBar onSearch={setSearchQuery} />

            <StatusMessage
                loading={loading}
                error={error}
                charactersCount={characters.length}
            />

            {characters.map((char) => (
                <CharacterCard key={char.id} character={char} />
            ))}
        </>
    )
}

export default App;
