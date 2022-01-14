export default function SearchForm({ keyword, setKeyword, fetchSearch }) {
    const handleSubmit = e => {
        e.preventDefault();
        fetchSearch(keyword);
    };

    return (
        <div className="search-bar">
            <form className="input-group" onSubmit={handleSubmit}>
                <input
                    className="form-control"
                    placeholder="Type keyword here and press Enter"
                    value={keyword}
                    onChange={e => setKeyword(e.target.value)}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary ml-2">
                        Submit
                    </button>
                </span>
            </form>
        </div>
    );
}
