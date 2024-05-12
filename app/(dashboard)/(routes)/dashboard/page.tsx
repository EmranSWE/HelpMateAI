"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code,
  ImageIcon,
  ImagePlusIcon,
  Languages,
  MessageSquare,
  Music,
  Video,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    href: "/conversation",
  },
  {
    label: "Learn English",
    icon: Languages,
    color: "text-lime-500",
    bgColor: "bg-lime-500/10",
    href: "/english",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: "/music",
  },
  {
    label: "Image Analysis",
    icon: ImagePlusIcon,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    href: "/image",
  },
  // {
  //   label: "Image Generation",
  //   icon: ImageIcon,
  //   color: "text-purple-500",
  //   bgColor: "bg-purple-500/10",
  //   href: "/image",
  // },
  {
    label: "Video Generation",
    icon: Video,
    color: "text-blue-700",
    bgColor: "bg-blue-500/10",
    href: "/image",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/code",
  },
];
const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="txt-2xl md:text-4xl font-bold text-center">
          Explore <span className="text-fuchsia-700"> the New </span> Era of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lf text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
          {tools.map((tool) => (
            <Card
              onClick={() => router.push(tool.href)}
              key={tool.href}
              className="p-4 bg-[#e6e6e6] flex items-center justify-between hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)} />
                </div>
                <div className="font-semibold">{tool.label}</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
