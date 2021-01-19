import { useState } from 'react'
function NewListingForm({ onNewListingSubmit }) {
    const [formData, setFormData] = useState({
        description: "",
        image: "",
        location: ""
    })

    function handleFormChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:6001/listings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(newObj => {
                onNewListingSubmit(newObj)
            })
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleFormChange} name="description" value={formData.description} type="text" placeholder="Description"></input>
            <input onChange={handleFormChange} name="image" value={formData.image} type="text" placeholder="Image"></input>
            <input onChange={handleFormChange} name="location" location="location" value={formData.location} type="text" placeholder="Location"></input>
            <input type="submit" value="submit"></input>
        </form>
    )
}

export default NewListingForm