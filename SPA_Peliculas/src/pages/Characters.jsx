import './Characters.css'

import { useEffect, useState } from "react";
import { fetchCharacters } from "../api/fetchCharacters";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
    };
    getCharacters();
  }, []);

  return (
    <div className="character-table">
      {characters ? (
        <div className="table-container">
          {characters.map((character) => (
            <div key={character.id} className="table-row">
              <div className="table-cell">
                <img src={character.image} alt="" className="character-image" />
              </div>
              <div className="table-cell">
                <div>{character.firstName}</div>
                <div>{character.age}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading characters</p>
      )}
    </div>
  );
};