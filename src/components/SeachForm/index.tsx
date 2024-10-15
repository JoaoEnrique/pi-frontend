type SearchFormProps = {
    placeholder?: string;
}

export function SearchForm(props: SearchFormProps){
    return (
        <div className="search-bar">
            <input type="text" placeholder={props.placeholder ?? "Buscar"}/>
            <button><img src="/img/search.png" alt="Buscar"/></button>
        </div>
    );
}