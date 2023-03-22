
import CharacterDescription from "components/CharacterDescription/CharacterDescription";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneCharacterId } from "servises/Fetch";


const Character = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState([])

    useEffect(() => {
        getOneCharacterId(id).then(res => setCharacter(res.data))
    }, [id])



    return (
        <main>
            <CharacterDescription character={character} />
        </main>
    )
};
export default Character;