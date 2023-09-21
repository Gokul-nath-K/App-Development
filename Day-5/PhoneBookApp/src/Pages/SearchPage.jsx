import React from 'react'
import SearchBar from '../Components/SearchBar'

function SearchPage() {
  return (
    <>
        <div className="container-fluid pt-4 h-100">
            <div className="row">
                <SearchBar/>
            </div>
            <div className="row pt-4 h-100">
                <p style={{color : "white"}}>Result...</p>
            </div>
        </div>
    </>
  )
}

export default SearchPage