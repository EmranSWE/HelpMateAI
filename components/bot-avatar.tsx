import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Bot } from "lucide-react";

const BotAvatar = () => {
  return (
    <Avatar className="h-10 w-10">
      <Bot className="h-10 w-10" />
    </Avatar>
  );
};

export default BotAvatar;
