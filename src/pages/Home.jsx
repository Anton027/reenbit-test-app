import { useEffect, useState } from "react";
import { getCharactersFetch } from "servises/Fetch";
import { Link,useLocation } from "react-router-dom";



const Home = () => {
    const [episodes, setEpisodes] = useState([])
    const location = useLocation();
    useEffect(() => {
        getCharactersFetch().then(res => setEpisodes(res))
    },[])
    

    return (
        
        <main>
            <h1>Home</h1>

            {episodes.length > 0 ?
                (<ul>
                    {episodes.map(
                        ({ id, name,species, image }) =>
                            <li key={id}>
                                <Link to={`/character`} state={{ from: location }}>
                                    <img src={image} alt={name} />
                                    <p>{name}</p>
                                    <p>{species}</p>
                                </Link>
                                
                            </li>
                    )}
                </ul>) : <h3>Not found</h3>}
        </main>
    )
};
export default Home; 