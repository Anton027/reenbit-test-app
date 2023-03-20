import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCharactersFetch } from "servises/Fetch";
import { Link, useLocation } from "react-router-dom";
import mobile from '../../assets/mobile.png';
import desctop from '../../assets/desctop.png'
import {
    List,
    Container,
    Name,
    Image,
    Species,
    Hero,
    ListItem,
    DescriptionWrap,
    HeroDesctop
} from "./Home.styled";
import SearchBox from "components/SearchBox/SearchBox";




const Home = () => {
    const [episodes, setEpisodes] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    useEffect(() => {
        getCharactersFetch().then(res => setEpisodes(res))
    },[])
    

    const namesSort = [...episodes].sort((firstName, secondName) => firstName.name.localeCompare(secondName.name));
    // console.log(namesSort)

    const characterName = searchParams.get("name") ?? "";
    const visibleEpisodes = namesSort.filter((episod) => 
        episod.name.toLowerCase().includes(characterName.toLowerCase())
    )
    // console.log(characterName);
    // console.log(visibleEpisodes);
    const updateQueryString = (name) => {
        const nextParams = name !== "" ? { name } : {};
        setSearchParams(nextParams);
    };

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
                (<List>
                    {visibleEpisodes.map(
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
                    </List>) : <h3>Not found</h3>}
                </Container>
            </main>

    )
};
export default Home; 