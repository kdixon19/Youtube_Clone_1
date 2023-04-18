import React, { useState } from 'react';

const SearchPage = (props) => {

    const [searchInput, setSearchInput] = useState('');

    function handleSubmit (event) {
        event.preventDefault();
        let video = props.video.filter ((el) => {
            return(
                el.video == searchInput
            )
        });
        props.setVideo(video)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type = 'text' value={searchInput} onChange = {(event) => setSearchInput(event.target.value)} />
            <button type = 'submit'>Search</button>
        </form>
     );
}
 
export default SearchPage;