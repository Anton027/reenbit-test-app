import { BackLink } from "components/BackLink/Backlink";

const Character = () => {
    return (
        <main>
            <h2>Character Page</h2>
            <BackLink>
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