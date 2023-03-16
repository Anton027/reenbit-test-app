import { BackLink } from "components/BackLink/Backlink";
// import { useEffect } from "react";
import { useLocation, } from "react-router-dom";
// import { getOneCharacterId } from "servises/Fetch";

const Character = () => {
    // const { characterId } = useParams();
    // const characterId = "1";
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
    // console.log(characterId);
    // useEffect(() => {
    //     getOneCharacterId(characterId)
    // }, [characterId])
    
    return (
        <main>
            <h2>Character Page</h2>
            <BackLink to={backLinkHref}>
                GO BACK
            </BackLink>

            <div>
                <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="name" />
                <h4>Rick Sanchez</h4>
                <p>informations</p>
                <ul>
                    <li>
                        <p>Gender</p>
                        <p>male</p>
                    </li>
                </ul>
            </div>
        </main>
    )
};
export default Character;