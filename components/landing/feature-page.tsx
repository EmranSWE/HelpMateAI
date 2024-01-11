"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Code, ImageIcon, MessageSquare, Video } from "lucide-react";
import { cn } from "@/lib/utils";
const feature = [
  {
    name: "Conversation  ",
    avatar: MessageSquare,
    color: "text-violet-500",
    bgColor: "green",
    title: "Advanced AI model",
    description:
      "Elevate conversations effortlessly with HelpMateAi, your go-to AI SaaS solution. Revolutionize communication and enhance engagement with cutting-edge technology.",
  },
  {
    name: "Code Generation",
    avatar: Code,
    color: "text-green-500",
    title: "Advanced AI model",
    description:
      "Turbocharge your coding process with CodeGenAI – the future of code generation. Streamline development tasks and unlock unprecedented efficiency with our advanced AI-driven solution ",
  },
  {
    name: "Image Generation",
    avatar: ImageIcon,
    color: "text-pink-500",
    title: "Advanced AI model",
    description:
      "Unleash visual creativity with ImageGenAI, harnessing the power of our advanced AI for seamless and stunning image generation. Redefine possibilities, effortlessly create with precision.",
  },
  {
    name: "Video",
    avatar: Video,
    color: "text-blue-500",
    title: "Advanced AI model",
    description:
      "Revolutionize content creation with VidGenAI. Our advanced AI transforms ideas into captivating videos, making creativity as simple as a click",
  },
];

const FeaturePage = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <div className="px-10 pb-20">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold   text-gradient">Features</h1>
          <p className="text-center mb-10 text-white">
            Transform Your Vision into Reality with the Power of Our Advanced AI
            Model
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {feature.map((item) => (
            <Card
              key={item.description}
              className="bg-[#192339] border-none text-white"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <div className="flex items-center flex-1">
                      <div className={cn("p-2 w-fit rounded-md", item.bgColor)}>
                        <item.avatar className={cn("w-10 h-10", item.color)} />
                      </div>
                      {item.name}
                    </div>

                    <div>
                      <p className="text-zinc-400 text-sm">
                        <p className="text-lg">{item.title}</p>
                      </p>
                    </div>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  {item.description}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;
