const StatusMessage = ({ loading, error, charactersCount, query }) => {
    return (
        <div className="flex flex-col justify-center">
            {loading && <p className="mt-4 text-center">Loading...</p>}
            {error && <p className="mt-4 text-red-500 font-bold text-center">{error}</p>}
            {query.length > 0 && query.length < 3 && (
                <p className="text-red-500 font-bold text-center mt-4">
                    Search term must be at least 3 characters long.
                </p>
            )}
            {charactersCount > 0 && !loading && !error && (
                <p className="mt-4 text-center">Found characters: {charactersCount}</p>
            )}

        </div>
    );
};

export default StatusMessage;