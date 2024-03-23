import React from 'react';
import BookCard from './Bookcard';

export default function SearchResults({ results }) {
  return (
    <div className="search-results">
      <h2>Search Results</h2>
      {results.length > 0 ? (
        <div className="book-list">
          {results.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}
