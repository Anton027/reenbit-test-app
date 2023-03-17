import { BackLink } from "components/BackLink/Backlink";
import { useEffect, useState } from "react";
import { useLocation,useParams } from "react-router-dom";
// import { getCharactersFetch } from "servises/Fetch";
import { getOneCharacterId } from "servises/Fetch";

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
    const { male,gender,image,name} = character;
    return (
        <main>
            
            <BackLink to={backLinkHref}>
                GO BACK
            </BackLink>

            <div key={character.id}>
                <img src={image} alt={name} />
                <h4>{name }</h4>
                <p>informations</p>
                <ul>
                    <li>
                        <p>{gender}</p>
                        <p>{ male}</p>
                        <p>{id}</p>

                    </li>
                </ul>
            </div>
        </main>
    )
};
export default Character;