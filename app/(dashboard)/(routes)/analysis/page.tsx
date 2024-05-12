"use client";
import * as z from "zod";
import Heading from "@/components/heading";
import { ImagePlusIcon, MessageSquare } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import Empty from "@/components/empty";
import Loader from "@/components/loader";
import { cn } from "@/lib/utils";
import UserAvatar from "@/components/user-avater";
import BotAvatar from "@/components/bot-avatar";
import { useProModal } from "@/hooks/use-pro-modal";
import toast from "react-hot-toast";
import ImageUploader from "@/components/image-uploader";
interface Message {
  role: string;
  parts: any;
}
const Conversation = () => {
  const proModal = useProModal();
  const router = useRouter();
  // Initialize messages state with an empty array
  const [messages, setMessages] = useState<Message[]>([]);
const [imageUrl,setImageUrl]=useState("")
const [error, setError] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const handleUploadSuccess = (imageLink:any) => {
    setImageUrl(imageLink)
  };

  const handleUploadError = (errorMessage:any) => {
    setError(errorMessage)
  };

  const onSubmit = async (values: any) => {
    try {
      if (!imageUrl) {
        toast.error("Please provide an image and prompt message.");
        return;
    }
      const response = await axios.post("/api/analysis", {
        images:imageUrl,
        // messages: values.prompt,
        messages: [{ text: values.prompt }],
      });
      // Update messages state with the new message and response
      setMessages((currentMessages) => [
        ...currentMessages,
        { role: "user", parts: [{ text: values.prompt }] },
        { role: "model", parts: [{ text: response.data }]},
      ]);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      router.refresh();
    }
  };
 
  return (
    <div>
      <Heading
        title="Image Analysis"
        description="Our Most Advanced Model"
        icon={ImagePlusIcon}
        iconColor="text-cyan-400"
        bgColor="bg-cyan-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
        <section className="flex gap-5">
        <ImageUploader onUploadSuccess={handleUploadSuccess} onUploadError={handleUploadError} />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Describe the image with detail analysis?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                type="submit"
                disabled={isLoading}
                size="icon"
              >
                Generate
              </Button>
            </form>
          </Form>
        </section>
          <div className="space-y-4 mt-4">
            {isLoading && (
              <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                <Loader />
              </div>
            )}
            {messages.length === 0 && !isLoading && (
              <div>
                <Empty label="No conversation started" />
              </div>
            )}
            <div className="flex flex-col-reverse gap-y-4">
              {messages.map((message) => (
                <div
                  key={message.parts}
                  className={cn(
                    "p-8 w-full flex items-start gap-x-8 rounded-lg",
                    message.role === "assistant"
                      ? "bg-muted "
                      : " bg-white border border-black/10"
                  )}
                >
                  {message.role === "model" ? (
                    <BotAvatar></BotAvatar>
                  ) : (
                    <UserAvatar></UserAvatar>
                  )}
                  <ReactMarkdown
                    components={{
                      pre: ({ node, ...props }) => (
                        <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                          <pre {...props} />
                        </div>
                      ),
                      code: ({ node, ...props }) => (
                        <code
                          className="bg-black/10 rounded-lg p-1"
                          {...props}
                        />
                      ),
                    }}
                    className="text-sm overflow-hidden leading-8"
                  >
                    {message?.parts[0].text || ""}
                  </ReactMarkdown>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
