import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCharactersFetch } from "servises/Fetch";
import mobile from '../../assets/mobile.png';
import desctop from '../../assets/desctop.png'
import {
    Container,
    Hero,
    HeroDesctop
} from "./Home.styled";
import SearchBox from "components/SearchBox/SearchBox";
import ListCharacter from "components/ListCharacter/ListCharacter";
// import useLocalStorage from "components/hooks/useLocalStorage";




const Home = () => {
    const [episodes, setEpisodes] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    
    useEffect(() => {
        getCharactersFetch().then(res => setEpisodes(res))
        
    },[])
    

    const namesSort = [...episodes].sort((firstName, secondName) =>
        firstName.name.localeCompare(secondName.name));

    const characterName = searchParams.get("name") ?? "";
    const visibleEpisodes = namesSort.filter((episod) => 
        episod.name.toLowerCase().includes(characterName.toLowerCase())
    )

    const updateQueryString = (name) => {
        const nextParams = name !== "" ? { name } : {};
        setSearchParams(nextParams);
    };
    // console.log(visibleEpisodes);
    // const [storageVisibleEpisodes] = useLocalStorage("visibleEpisodes",visibleEpisodes);
    return (
        
        <main>
            <Container>
                <Hero
                    src={mobile}
                    alt="mobile"
                />
                <HeroDesctop
                    src={desctop}
                    alt="desctop"
                />

                <SearchBox value={characterName} onChange={updateQueryString}/>
                {episodes.length > 0 ?
                    <ListCharacter characters={visibleEpisodes} />
                    : <h3>Not found</h3>
                }
            </Container>
        </main>

    )
};
export default Home; 
