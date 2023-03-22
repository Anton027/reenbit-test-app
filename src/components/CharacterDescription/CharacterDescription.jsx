import {
    Image,
    ListItem,
    Container,
    List,
    Title,
    Wrap,
    Info,
    Descript,
    ListTitle
} from "./CharacterDescription.styled";
import { BackLink } from "components/BackLink/Backlink";
import { useLocation } from "react-router-dom";
// import useLocalStorage from "components/hooks/useLocalStorage";

const CharacterDescription = ({ character }) => { 
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
    
    window.localStorage.setItem("oneCharacter", JSON.stringify(character));
    const storageParse = JSON.parse(window.localStorage.getItem("oneCharacter"));

    const { type,origin,name,gender,image,status,species} = storageParse;
    return (
        <Container key={storageParse.id}>
                    <BackLink to={backLinkHref}>
                        GO BACK
                    </BackLink>
                        <Wrap>
                            <Image src={image} alt={name} />
                            <Title>{name}</Title>
                        </Wrap>
                        
                        <ListTitle>
                            Informations
                        </ListTitle>
                        <List>
                            <ListItem>
                                <Info>Gender</Info>
                                <Descript>{gender}</Descript>
                            </ListItem>
                            <ListItem>
                                <Info>Status</Info>
                                <Descript>{status}</Descript>
                            </ListItem>
                            <ListItem>
                                <Info>Species</Info>
                                <Descript>{species}</Descript>
                            </ListItem>
                            <ListItem>
                                <Info>Origin</Info>
                                <Descript>{origin ? origin.name : "not"}</Descript>
                            </ListItem>
                            <ListItem>
                                <Info>Type</Info>
                                <Descript>{(type === '') ? "unknow" : type}</Descript>
                            </ListItem>
                        </List>
                    </Container>
    )
};

export default CharacterDescription;