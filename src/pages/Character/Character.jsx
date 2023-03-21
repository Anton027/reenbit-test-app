import { BackLink } from "components/BackLink/Backlink";
// import useLocalStorage from "components/hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { useLocation,useParams } from "react-router-dom";
import { getOneCharacterId } from "servises/Fetch";
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
} from "./Character.styled"

const Character = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState([])

    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    useEffect(() => {
        getOneCharacterId(id).then(res => setCharacter(res.data))
    }, [id])
    
    console.log(character);

    // const [storage] = useLocalStorage("characterOne", character)
    const { type,origin,name,gender,image,status,species} = character;
    return (
            <main>
                <Container key={character.id}>
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
                </main>
    )
};
export default Character;