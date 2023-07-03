import React from 'react';

const AddToFavoritesButton = ({ pokemon, addToFavorites }) => {
  const handleAddToFavorites = () => {
    addToFavorites(pokemon);
  };

  return (
    <button onClick={handleAddToFavorites}>Add to Favorites</button>
  );
};

export default AddToFavoritesButton;
