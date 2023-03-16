import React from 'react';
import characterData from '../data/characterData.json'
import Character from './Character'

const CharacterGallery = () => {
    const listOfChars = characterData.map((char, i) => <Character {...char} key={i} />)
    return (
        <div data-test="component-char-gallery">
            <h1>Lord of the Rings</h1>
            {listOfChars}
        </div>
    );
};

export default CharacterGallery;