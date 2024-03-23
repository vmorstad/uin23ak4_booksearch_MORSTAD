import React from 'react';

export default function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.imageUrl} alt={book.title} />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Published Year: {book.publishedYear}</p>
        <p>Average Rating: {book.averageRating}</p>
        <a href={`https://www.amazon.com/s?k=${book.amazonId}`} target="_blank" rel="noopener noreferrer">Search on Amazon</a>
      </div>
    </div>
  );
}
