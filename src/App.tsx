import {useState} from 'react'
import SearchBar from "./components/SearchBar";
import CharacterCard from "./components/CharacterCard";

function App() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query) => {
        setSearchQuery(query);
        console.log(query);
    };

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <CharacterCard/>
        </>
    )
}

export default App