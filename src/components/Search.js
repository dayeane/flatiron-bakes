function Search(props) {
    return (
        <div>
            <h2>Search</h2>
            <input onChange={props.handleSearch} value={props.search}></input>
            <tag></tag>
        </div>
    );
}

export default Search;
  