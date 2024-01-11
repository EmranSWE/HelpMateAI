import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import ImagePrompt from "../../assets/image-prompt.png";
import Link from "next/link";
import VideoPlayer from "./video-payer";
const ContentCreation = () => {
  return (
    <>
      <div className="text-white flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-8">
          <h1 className="text-4xl font-bold mb-4 text-gradient">
            Content Creation
          </h1>
          <p className="text-lg mb-4">
            We take your message and transform it into a story with distinct
            style for each digital platform that resonates with your audience.
          </p>
          <Link href="/image">
            <Button
              variant="premium"
              className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
            >
              Get Started
            </Button>
          </Link>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={ImagePrompt}
            alt="image"
            width={500}
            height={500}
            objectFit="cover"
            className="rounded"
          />
        </div>
      </div>

      <div className="text-white flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <VideoPlayer />
        </div>
        <div className="lg:w-1/2 p-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gradient">
            Video Generation
          </h1>
          <p className="text-lg mb-4">
            Transform your fantasy into reality with our amazing video creation.
            Share your story, and we will craft a breathtaking visual
            experience. Immerse yourself in the extraordinary as we bring your
            narrative to life – where dreams become cinematic masterpieces.
          </p>
          <Link href="/video">
            <Button
              variant="premium"
              className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContentCreation;
