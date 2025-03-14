"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickImage, setPickImage] = useState();
  const imageRef = useRef();
  function handlePickCLick() {
    imageRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileRider = new FileReader();
    fileRider.onload = () => {
      setPickImage(fileRider.result);
    };
    fileRider.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickImage && <p>No image pick yet</p>}
          {pickImage && (
            <Image
              src={pickImage}
              alt="the Image selected by user"
              fill
            ></Image>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageRef}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickCLick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
