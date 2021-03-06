import React, { useState,useEffect } from "react";
import "./loadingImage.css";
import AddImage from "./addImage/addImage";

const LoadingImage = (props) => {
  const [objImage, setObjImage] = useState({});
useEffect(()=>{
   
    const arrImage= Object.values(objImage)
  
    props.dataImage(arrImage)
},[objImage])
  const changeImage = (index, file) => {
    setObjImage({
      ...objImage,
      [index]: file,
    });
  };
  const changeDeleteImage = (index) => {
    const newObj = Object.entries(objImage).reduce((prev, [key, val]) => {
      if (key[0] === index) {
        return prev;
      }
      return {
        ...prev,
        ...{ [key]: val },
      };
    }, {});

    setObjImage(newObj);
  };

  return (
    <div className="loading-image">
      <AddImage
      required={true}
        id="0"
        changeImage={props.clickInput()}
        handleChange={changeImage}
        deleteChange={changeDeleteImage}
      />
      <AddImage
        id="1"
        handleChange={changeImage}
        changeImage={props.clickInput()}
        deleteChange={changeDeleteImage}
      />
      <AddImage
        id="2"
        handleChange={changeImage}
        changeImage={props.clickInput()}
        deleteChange={changeDeleteImage}
      />
      <AddImage
        id="3"
        handleChange={changeImage}
        changeImage={props.clickInput()}
        deleteChange={changeDeleteImage}
      />
      <AddImage
        id="4"
        handleChange={changeImage}
        changeImage={props.clickInput()}
        deleteChange={changeDeleteImage}
      />
      <AddImage
        id="5"
        handleChange={changeImage}
        changeImage={props.clickInput()}
        deleteChange={changeDeleteImage}
      />
    </div>
  );
};
export default LoadingImage;
