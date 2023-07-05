import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './CharacterList.module.css';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [characterData, setCharacterData] = useState(null);
  const [showEpisodes, setShowEpisodes] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/episode');
        setEpisodes(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEpisodes();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`);
      const character = response.data.results[0];
      if (character) {
        setCharacterData(character);
      } else {
        setCharacterData(null);
        alert('Personagem não encontrado!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = async (e) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);

    if (inputValue) {
        const filteredCharacters = characters.filter((character) =>
          character.name.toLowerCase().includes(inputValue.toLowerCase())
        );
        const limitedSuggestions = filteredCharacters.slice(0, 10); // Limitar para 5 sugestões
        setSuggestions(limitedSuggestions);
      } else {
        setSuggestions([]);
      }
    
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name);
    setSuggestions([]);
  };

  

  return (
    <div className={style.container}>
      <h1>Rick and Morty Characters</h1>
      <div className={style.searchContainer}>
        <input
          type="text"
          placeholder="Digite o nome do personagem"
          value={searchTerm}
          onChange={handleInputChange}
        />
        {characters.length > 0 && (
        <div className={style.suggestionsContainer}>
            {suggestions.length > 0 && (
            <div className={style.suggestionsBackground}>
                <ul className={style.suggestions}>
                {suggestions.map((suggestion) => (
                    <li key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)}>
                    <img src={suggestion.image} className={style.suggestionImage} alt={suggestion.name} />
                    <span>{suggestion.name}</span>
                    </li>
                ))}
                </ul>
            </div>
            )}
        </div>
        )}
        <button onClick={handleSearch}>Pesquisar</button>
      </div>
      {characterData && (
        <div className={style.character}>
            <h2>{characterData.name}</h2>
            <img src={characterData.image} alt={characterData.name} />
            <div className={style.characterInfo}>
            <p>
                <strong>Espécie:</strong> {characterData.species}
            </p>
            <p>
                <strong>Origem:</strong> {characterData.origin.name}
            </p>
            <p>
                <strong>Gênero:</strong> {characterData.gender}
            </p>
            </div>
            <div className={style.subcontainer}>
            <button
                className={style.toggleEpisodes}
                onClick={() => setShowEpisodes(!showEpisodes)}
            >
                {showEpisodes ? 'Esconder episódios' : 'Mostrar episódios'}
            </button>
            </div>
            {showEpisodes && (
            <div>
                <h3>Episódios:</h3>
                <ul>
                {characterData.episode.map((episodeUrl) => {
                    const episodeId = episodeUrl.split('/').pop();
                    const episode = episodes.find((ep) => ep.id === parseInt(episodeId));
                    return <li key={episodeId}>{episode ? episode.name : episodeId}</li>;
                })}
                </ul>
            </div>
            )}
            <h3 className={style.dev}>By: Juanfs</h3>
        </div>
        )}
    </div>
  );
};

export default CharacterList;
