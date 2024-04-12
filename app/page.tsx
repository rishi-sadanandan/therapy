"use client";

import { useState, useEffect } from "react";
import { useChat } from "ai/react";
import TextareaAutosize from "react-textarea-autosize";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InfoCard } from "@/components/info";
import {
  InfoCircledIcon,
  CircleIcon,
  StarIcon,
  CounterClockwiseClockIcon,
  TwitterLogoIcon,
  MagicWandIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const { toast } = useToast();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && e.metaKey) {
        console.log("⌘J pressed.");
        toast({
          description: "This feature is in development. Check back soon! ⚡",
        });
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="flex justify-center ">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed bottom-6 left-6"
          >
            <InfoCircledIcon className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>rishi-sadanandan/therapy</DialogTitle>
            <DialogDescription>
              {`An open-source journal built with Tailwind CSS and the Vercel AI SDK. Press `}
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>J
              </kbd>
              {` for personalized questions.`}
            </DialogDescription>
          </DialogHeader>
          <div className="flex text-sm text-muted-foreground justify-between">
            <div className="flex space-x-4">
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                TypeScript
              </div>
              <div className="flex items-center">
                <CounterClockwiseClockIcon className="mr-1 h-3 w-3" />
                Updated July 2023
              </div>
            </div>
            <Button asChild>
              <a
                target="_blank"
                href="https://github.com/rishi-sadanandan/therapy"
                rel="noopener noreferrer"
              >
                Star
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <Button
        variant="outline"
        size="icon"
        className="visible sm:invisible fixed bottom-6 right-6"
      >
        <MagicWandIcon className="h-4 w-4" />
      </Button>
      <TextareaAutosize
        className="w-full h-full max-w-lg pt-6 pb-24 px-4 md:py-24 md:max-w-xl border-none resize-none outline-none placeholder-slate-500 placeholder-opacity-50"
        value={input}
        placeholder={`Begin writing, press ⌘J for AI...`}
        onChange={handleInputChange}
      />
    </div>
  );
}
