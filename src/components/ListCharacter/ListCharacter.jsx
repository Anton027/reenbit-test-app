
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import useLocalStorage from "components/hooks/useLocalStorage";
import {
    List,
    ListItem,
    Image,
    DescriptionWrap,
    Species,
    Name
} from "./ListCharacter.styled";

const ListCharacter = ({ characters }) => {
    const location = useLocation();
    // const [storageCharacters ] = useLocalStorage("characters", characters);
    

    return (
        <List>
                    {characters.map(
                        ({ id, name, species, image }) => 
                            
                            <ListItem key={id}>
                                <Link to={`${id}`} state={{ from: location }}>
                                    <Image src={image} alt={name} />
                                    <DescriptionWrap>
                                        <Name>{name}</Name>
                                        <Species>{species}</Species>
                                    </DescriptionWrap>
                                </Link>
                            </ListItem>
                        
                    )}
        </List>
    )    
};

export default ListCharacter;