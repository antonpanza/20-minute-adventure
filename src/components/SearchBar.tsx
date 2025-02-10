const SearchBar = () => {

    return (
        <div className="flex justify-center">
            <div className="mt-32 mx-4 w-full max-w-[626px]">
                <input
                    id="searchInput"
                    type="text"
                    placeholder="Search characters..."
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
