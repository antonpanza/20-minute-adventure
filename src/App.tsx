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
        <div className="max-w-[1596px] w-full m-auto">
            <SearchBar onSearch={setSearchQuery} />

            <StatusMessage
                loading={loading}
                error={error}
                charactersCount={characters.length}
            />

            <div className="flex flex-wrap justify-center m-auto gap-5 mx-10 my-17">
                {characters.map((char, index) => (
                    <CharacterCard key={char.id} character={char}  index={index}  />
                ))}
            </div>
        </div>
    )
}

export default App;
