"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user6.webp";
import user4 from "../../assets/user5.webp";
import user7 from "../../assets/user7.webp";

import StarRating from "./star-rating";
const testimonials = [
  {
    name: "Brad Mitchler    ",
    avatar: user1,
    review: 5,
    title: "Software Engineer",
    description:
      "HelpMateAI is pure magic for content creators! From visuals to code, it transforms workflows, sparks creativity, and elevates every project. A true game-changer in content creation!",
  },
  {
    name: "Adam Goldh",
    avatar: user4,
    review: 5,
    title: "Adequate maker :)",
    description:
      "HelpMateAI is a game-changer! Unmatched in versatility, it's transformed our creative process. From image and video to audio and code, it's a must-have for anyone looking to elevate their projects. ",
  },
  {
    name: "Sruti Satish",
    avatar: user2,
    review: 5,
    title: "Content Marketer",
    description:
      "HelpMateAI is my content creation secret weapon. From images to code, it streamlines everything. Efficient, creative, and indispensable for any content marketer!",
  },
  {
    name: "Rabbi",
    avatar: user7,
    review: 5,
    title: "CFO",
    description:
      "HelpMateAI is my go-to for content magic. From visuals to code, it's a game-changer. Simplifies my workflow, sparks creativity, and elevates every project. A must for content creators!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-10  text-gradient">
          Look What Our Users Are Saying
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                {/* Avatar */}

                <Image
                  alt="Name"
                  src={item.avatar}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />

                <div className="flex flex-col">
                  <div>
                    <p className="text-lg">{item.name}</p>
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm">{item.title}</p>
                  </div>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                <StarRating rating={item.review}></StarRating>

                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
