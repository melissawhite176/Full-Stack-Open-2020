import React from 'react'

const Filter = ({search, handleSearchChange}) => {
    return (
        <form>
            <div>
                filter shown with <input value={search} onChange={handleSearchChange} />
            </div>
        </form>
    )
}
export default Filter