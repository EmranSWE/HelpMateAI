import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import {
  Code,
  ImageIcon,
  MessageCircle,
  MessageSquare,
  Star,
  Video,
} from "lucide-react";
const testimonials = [
  {
    name: "Conversation  ",
    avatar: <MessageSquare />,
    color: "red",
    bgColor: "green",
    review: 5,
    title: "Advanced AI model",
    description:
      "HelpMateAI is pure magic for content creators! From visuals to code, it transforms workflows, sparks creativity, and elevates every project. A true game-changer in content creation!",
  },
  {
    name: "Code Generation",
    avatar: <Code />,
    review: 5,
    title: "Advanced AI model",
    description:
      "HelpMateAI is a game-changer! Unmatched in versatility, it's transformed our creative process. From image and video to audio and code, it's a must-have for anyone looking to elevate their projects. ",
  },
  {
    name: "Image Generation",
    avatar: <ImageIcon />,
    review: 5,
    title: "Advanced AI model",
    description:
      "HelpMateAI is my content creation secret weapon. From images to code, it streamlines everything. Efficient, creative, and indispensable for any content marketer!",
  },
  {
    name: "Video",
    avatar: <Video />,
    review: 5,
    title: "Advanced AI model",
    description:
      "HelpMateAI is my go-to for content magic. From visuals to code, it's a game-changer. Simplifies my workflow, sparks creativity, and elevates every project. A must for content creators!",
  },
];
const FeaturePage = () => {
  return (
    <div>
      <div className="px-10 pb-20">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-10  text-gradient">
            Features
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {testimonials.map((item) => (
            <Card
              key={item.description}
              className="bg-[#192339] border-none text-white"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <div className="w-44">{item.avatar}</div>
                    <div>
                      <p className="text-zinc-400 text-sm">
                        <p className="text-lg">{item.name}</p>
                        {item.title}
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
