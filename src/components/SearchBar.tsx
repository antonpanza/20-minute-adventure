import { useState, useEffect } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState<string>("");

    useEffect(() => {
        document.getElementById("searchInput")?.focus();
    }, []);

    useEffect(() => {
        /*if (query.length < 3) return;*/

        const delayDebounceFn = setTimeout(() => {
            onSearch(query);
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [query]);

    return (
        <div className="flex justify-center">
            <div className="mt-32 mx-4 w-full max-w-[626px]">
                <input
                    id="searchInput"
                    type="text"
                    placeholder="Search characters..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full p-5 shadow-lg
                 focus:outline-none focus:ring-2 focus:ring-purple
                 placeholder-purple text-[22px] text-purple font-bold leading-none
                 transition-all"
                />
            </div>
        </div>
    );
};

export default SearchBar;


