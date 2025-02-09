"use client";
import { useState } from 'react'
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar = (search: SearchBarProps) => {

    const [query, setQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        search.onSearch(query);
    }


    return (
        <div>
            <form className={`border border-gray-300 rounded-lg p-2 flex items-center justify-between sm:w-[90px] md:w-[175px] lg:w-full`} >
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search products..."
                    className="placeholder:gray-300 w-full outline-none"
                />
                <FaSearch className="w-[16px] h-[16px] text-gray-300" onClick={handleSearch} />
            </form>
        </div>
    )
}

export default SearchBar