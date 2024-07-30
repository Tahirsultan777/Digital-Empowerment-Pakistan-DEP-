import { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  console.log("results", results);
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/api/data/search?q=${query}`);
      console.log("dgdgdfg", response);
      setResults(response.data);

    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className='SearchForm'>
      <form className='searchProducts' onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
      </form>
      <ul>
        {results.map((curElem, index) => {
          const { price, description, service, provider, image } = curElem;
          {/* console.log("Imagesss", image) */ }
          return (
            <div className="card" key={index}>
              <div className="product-card">
                <img src={image} alt="our service img" width="300" />
                <p>{provider}</p>
                <h2>{service}</h2>
                <p>{description}</p>
                <div className="card_prices">
                  <button>{price}</button>
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
          )
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
