import React, { useState } from "react";

function ListingCard({ listing: { id, description, image = "https://via.placeholder.com/300x300", location }, onDeleteListing}) {
  const [isStarred, setIsStarred] = useState(false)

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })

    onDeleteListing(id)
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isStarred ? (
          <button onClick={() => setIsStarred(!isStarred)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setIsStarred(!isStarred)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
