function Sort({ isSorted, setIsSorted }) {
    
    function handleClick(e) {
        setIsSorted(e.target.checked)
    }
    
    return (
        <label>
        Sort Alphabetically
            <input onChange={handleClick} type="checkbox" checked={isSorted}/>
        </label>
    )
}

export default Sort