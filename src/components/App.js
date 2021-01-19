import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListingForm from "./NewListingsForm";

function App() {
  const [listings, setListings] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [isSorted, setIsSorted] = useState(false)

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(response => response.json())
      .then(listingsObj => {
        setListings(listingsObj)
      })
  }, [])

  function onDeleteListing(deleteListingId) {
    const afterDeleteArray = listings.filter(listing => {
      return listing.id !== deleteListingId
    })

    setListings(afterDeleteArray)
  }

  function onNewListingSubmit(newListing) {
    setListings([...listings, newListing])
  }


  const visibleListings = listings.filter(listing => {
    return listing.description.toLowerCase().includes(searchInput.toLowerCase())
  }).sort((a, b) => {
    if (isSorted) {
      return a.description.localeCompare(b.description)
    }
    return 0
  })

return (
  <div className="app">
    <Header setSearchInput={setSearchInput} isSorted={isSorted} setIsSorted={setIsSorted} />
    <NewListingForm onNewListingSubmit={onNewListingSubmit} />
    <ListingsContainer listings={visibleListings} onDeleteListing={onDeleteListing} />
  </div>
);
}

export default App;
