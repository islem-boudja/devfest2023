"use client";
import { useState } from "react";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch(
        "http://localhost:3001/api/stories/imgtostory",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Image uploaded successfully");
        const res = await response.json();
        console.log(res);
      } else {
        console.error("Failed to upload image");
      }
    } catch (error: any) {
      console.error("Error uploading image:", error.message);
    }
  };

  return (
    <div>
      <label htmlFor="image">Choose an image:</label>
      <input type="file" id="image" name="image" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;
