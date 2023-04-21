import React, { useState } from 'react';
import axios from 'axios';

const SearchPage = (props) => {

    const [searchInput, setSearchInput] = useState('');

    function handleSubmit (event) {
        event.preventDefault();
        searchForSongs(); 
    }

    async function searchForSongs(){
        try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchInput}&key=AIzaSyD2Stn_jKR8WFK81mOJuNxYMhHsUdwwPZ8 &part=snippet&type=video&maxResults=3`);
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }


    
    return (
        <form onSubmit={handleSubmit}>
            <input type = 'text' value={searchInput} onChange = {(event) => setSearchInput(event.target.value)} />
            <button type = 'submit'>Search</button>
        </form>
     );
}
 
export default SearchPage;