import React, { useState } from "react"
import wine_rack from "./wine_rack.jpeg"
import ItemDetails from "../components/ItemDetails"

const MainContainer = () => {

    const [selectedImage,setSelectedImage] = useState(null);

    const OnImgClick = function (image) {
        setSelectedImage(image);
    }

    const handleClick = () => {
        OnImgClick(selectedImage)
      }


  

    return (
        <>

        <div id="main-container">

        
            <div id="box1">
            <img id="image_1" src={wine_rack}/>
            <p>£25.00</p>
            <button></button>
            
            </div>

            <div id="box2">
            <img id="image_2" src={wine_rack}/>
            <p>£25.00</p>
           
            </div>

            <div id="box3">
            <img id="image_3" src={wine_rack}/>
            <p>£25.00</p>
            
            </div>

            <div id="box4">
            <img id="image_4" src={wine_rack}/>
            <p>£25.00</p>
            
            </div>


    
        

        </div>

        <br/>

        <div id="main-container-2">
            <div id="box5">
            <img id="image_5" src={wine_rack}/>
            <p>£25.00</p>
            
            </div>
           

            <div id="box6">
            <img id="image_6" src={wine_rack}/>
            <p>£25.00</p>
            
            </div>

            <div id="box7">
            <img id="image_7" src={wine_rack}/>
            <p>£25.00</p>
            
            </div>

            <div id="box8">
            <img id="image_8" src={wine_rack}/>
            <p>£25.00</p>
            
            </div>
        </div>

        <ItemDetails selectedImage={selectedImage} OnImgClick={OnImgClick} />

        </>

      
        
        )
       
};

export default MainContainer;