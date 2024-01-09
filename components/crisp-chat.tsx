"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("0c00676f-55d7-4d81-b1a2-4a8419358442");
  }, []);
  return null;
};
