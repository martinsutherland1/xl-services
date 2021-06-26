import React from "react";

const ItemDetails = ({selectedImage, OnImgClick}) => {

    const handleClick = () => {
      OnImgClick(selectedImage)
    }

    return (
        <li onClick={handleClick} >{selectedImage}</li>
    )
  
}

export default ItemDetails;