import React, { useState } from 'react'
import BookList from './components/Bookcard'
import SearchBar from './components/Search'
import SearchResults from './components/SearchResults'
import './styles/App.scss'

function App() {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = async () => {
        if (searchQuery.length < 3) {
            alert('Søket må være på minst tre tegn!!!')
            return
        }

        {
            const response = await fetch(`https://openlibrary.org/search.json?q=${searchQuery}&fields=title,first_publish_year,author,average_rating,amazon_id`)
            const data = await response.json()
            setSearchResults(data.docs)
        }
    }

    return (
        <div>
            <h1>BookSearch Engine</h1>
            <p>Search within Open Library´s Internet Archive</p>
            <SearchBar setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
            {searchResults.length === 0 ? <BookList /> : <SearchResults searchResults={searchResults} />}
        </div>
    )
}

export default App