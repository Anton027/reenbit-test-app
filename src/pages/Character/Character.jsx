import { BackLink } from "components/BackLink/Backlink";
import { useEffect, useState } from "react";
import { useLocation,useParams } from "react-router-dom";
// import { getCharactersFetch } from "servises/Fetch";
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
    // const characterId = "1";
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    // const [episodes, setEpisodes] = useState([])
    
    useEffect(() => {
        // getCharactersFetch().then(res => setEpisodes(res));
        getOneCharacterId(id).then(res => setCharacter(res.data))
    },[id])
    
    console.log(character);

    
    // const namesSort = [...episodes].sort((firstName, secondName) => firstName.name.localeCompare(secondName.name));
    // console.log(namesSort);
    // const getEpisodeById = (id) => {
    //     return namesSort.find((el) => el.id === id);
    // };
    // const episode = getEpisodeById(id);
    // console.log(episode);
    // console.log(characterId);
    // useEffect(() => {
    //     getOneCharacterId(characterId)
    // }, [characterId])

    const { type,origin,name,gender,image,status,species} = character;
    return (
        <main>
            
            <BackLink to={backLinkHref}>
                GO BACK
            </BackLink>

            <Container key={character.id}>
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