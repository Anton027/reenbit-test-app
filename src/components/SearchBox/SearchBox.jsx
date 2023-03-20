import { InputSearch, LabelSearch } from "pages/Home/Home.styled";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = ({ value, onChange }) => { 
    
    return (
        <LabelSearch>
            <AiOutlineSearch size={22} />
            <InputSearch
                placeholder="Filter by name..."
                type="text"
                name="filter"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </LabelSearch>
    )
};

export default SearchBox;