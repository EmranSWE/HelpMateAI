/* eslint-disable @next/next/no-img-element */

"use client"
import React, { useState, useRef } from 'react';
import { PlusIcon, Loader } from 'lucide-react';

interface ImageUploaderProps {
  onUploadSuccess?: (imageUrl: string) => void; // Optional success callback
  onUploadError?: (errorMessage: string) => void; // Optional error callback
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  onUploadSuccess,
  onUploadError,
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return; // Handle no file selected

    setIsLoading(true); // Set loading state to true

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('https://api.imgbb.com/1/upload?key=429d034e5c5a2587acf4036bc530b5c8', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Image upload failed');
      }

      const data = await response.json();
      const imageLink = data.data.url;

      setImageUrl(imageLink);
      onUploadSuccess?.(imageLink); // Call success handler with image link
    } catch (error) {
      onUploadError?.("Error uploading image"); // Call error handler with error message
    } finally {
      setIsLoading(false); // Set loading state to false after upload completion
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Programmatically click the file input
    }
  };

  return (
    <div className="rounded-lg w-20 h-20">
      {isLoading ? (
        <div className="border-dashed border-2 rounded-lg border-gray-300 flex items-center justify-center w-full h-full bg-gray-100 hover:bg-gray-200">
          <Loader />
        </div>
      ) : imageUrl ? (
        <img
          src={imageUrl}
          alt="Uploaded"
          onClick={triggerFileInput}
          className="border-dashed border-2 rounded-lg border-gray-200 flex items-center justify-center w-full h-full bg-gray-100 hover:bg-gray-200"
        />
        
      ) : (
        <button type="button" onClick={triggerFileInput} className="border-dashed border-2 rounded-lg border-gray-300 flex items-center justify-center w-full h-full bg-gray-100 hover:bg-gray-200">
          <PlusIcon />
        </button>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ImageUploader;