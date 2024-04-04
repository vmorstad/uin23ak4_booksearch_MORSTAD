import React from 'react';

export default function Layout() {
    const handleSearch = () => {
        console.log('Søk utført!')
    };

    return (
        <>
            <input type="text" placeholder="Søk..."/>
            <button onClick={handleSearch}>Søk</button>
        </>
    );
}
