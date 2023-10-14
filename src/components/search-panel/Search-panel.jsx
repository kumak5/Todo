import React from 'react'

const SearchPanel = ({setFilterInput}) => {

     

    return (
        <input placeholder={'Search'} 
        onChange={(e) => setFilterInput(e.target.value)}
        />
        )
}

export default SearchPanel