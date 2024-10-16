import { useState } from "react";

type SearchFormProps = {
    placeholder?: string;
    onSearch: (query: string) => void;
}

export function SearchForm(props: SearchFormProps){
    const [searchQuery, setSearchQuery] = useState("");

    function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
        const query = event.target.value;
        setSearchQuery(query);
        props.onSearch(query); // Chama a função de callback passada via props
    }

    return (
        <div className="search-bar">
            <input type="text" placeholder={props.placeholder ?? "Buscar"} value={searchQuery} onChange={handleSearchChange}
            />
            <button><img src="/img/search.png" alt="Buscar"/></button>
        </div>
    );
}