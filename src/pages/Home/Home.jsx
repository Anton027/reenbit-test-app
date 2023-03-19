import { useEffect, useState } from "react";
import { getCharactersFetch } from "servises/Fetch";
import { Link, useLocation } from "react-router-dom";
import mobile from '../../assets/mobile.png';
import desctop from '../../assets/desctop.png'
import { AiOutlineSearch } from "react-icons/ai";
import {
    List,
    Container,
    Name,
    Image,
    Species,
    Hero,
    ListItem,
    DescriptionWrap,
    LabelSearch,
    InputSearch,
    HeroDesctop
} from "./Home.styled";




const Home = () => {
    const [episodes, setEpisodes] = useState([])
    
    const location = useLocation();
    useEffect(() => {
        getCharactersFetch().then(res => setEpisodes(res))
    },[])
    

    const namesSort = [...episodes].sort((firstName, secondName) => firstName.name.localeCompare(secondName.name));

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

                <LabelSearch >
                    <AiOutlineSearch size={22} />
                    <InputSearch
                        placeholder="Filter by name..."
                        type="text"
                        name="filter"
                    />
                </LabelSearch>
            {episodes.length > 0 ?
                (<List>
                    {namesSort.map(
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