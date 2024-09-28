import React from 'react'

const SearchBlog = ({ search, handleSearchChange, handleSearch }) => {

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleSearch();
        }
      };

  return (
    <div className='w-full flex'>    
      <input
        type="text"
        placeholder="Hotels with Rooftop Pool Near ..."
        value={search}
        onChange={handleSearchChange}
       onKeyPress={handleKeyPress}
        className='py-2 px-4 mr-5 w-full bg-[#f7f8f9] focus:outline-none focus:border'
      />
      <button className='bg-[#1E73BE] px-4 py-2 text-white'>Search</button>
    </div>
  )
}

export default SearchBlog