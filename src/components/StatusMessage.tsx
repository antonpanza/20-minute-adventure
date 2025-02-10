const StatusMessage = ({ loading, error, charactersCount }) => {
    return (
        <div className="flex justify-center">
            {loading && <p className="mt-4">Loading...</p>}
            {error && <p className="mt-4 text-red-500">{error}</p>}
            {charactersCount > 0 && !loading && !error && (
                <p className="mt-4">Found characters: {charactersCount}</p>
            )}
        </div>
    );
};

export default StatusMessage;