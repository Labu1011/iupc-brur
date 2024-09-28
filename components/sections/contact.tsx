import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
} from "../ui/sheet";
import { useAppContext } from "@/context";
import { TypeAnimation } from "react-type-animation";
import clsx from "clsx";
import { Button } from "../ui/button";
import TypingAnimation from "./typingAnimation";

const Contact = () => {
  const { isOpen, setIsOpen } = useAppContext();
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        side={"left"}
        className="flex flex-col left-3 bg-localWhite rounded-3xl mt-auto mb-3 h-[90%] w-[90%] max-w-md"
      >
        <SheetHeader>
          <SheetDescription>To : Multicone Studio</SheetDescription>
        </SheetHeader>
        <div className="h-4"></div>
        <CustomSheetDescription />
        <div className="mt-auto flex items-center justify-between">
          <p className="underline">info@multicone.com</p>
          <Button className="my-auto">Send Message</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Contact;

const CustomSheetDescription = () => {
  // form inputs NAME, TOPIC, EMAIL
  const [name, setName] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const submitForm = (name: string, topic: string, email: string) => {};

  const [showSecondPart, setShowSecondPart] = useState<boolean>(false);
  const [showSelect, setShowSelect] = useState<boolean>(false);
  const [finalPart, setFinalPart] = useState<string>("");
  const [showEmailInput, setShowEmailInput] = useState<boolean>(false);

  const typingDuration = 1000;

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleNameSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && name.trim() !== "") {
      setShowSecondPart(true);
    }
  };

  const handleTopicChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedTopic = e.target.value;
    setTopic(selectedTopic);

    switch (selectedTopic) {
      case "a new project":
        setFinalPart(" and I’m excited to discuss the details with you.");
        break;
      case "joining the team":
        setFinalPart(" and I’d love to explore how I can contribute.");
        break;
      case "an internship":
        setFinalPart(" and I’m eager to learn more about opportunities.");
        break;
      case "something else":
        setFinalPart(" and I’d like to chat about something important.");
        break;
      default:
        setFinalPart("");
        break;
    }
  };

  useEffect(() => {
    if (topic) {
      const timer = setTimeout(() => {
        setShowEmailInput(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [topic]);

  useEffect(() => {
    if (showEmailInput) {
      const emailInput = document.getElementById("emailInput");
      emailInput?.focus();
    }
  }, [showEmailInput]);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="w-full text-lg text-black font-regular">
      <TypeAnimation
        sequence={["Hi, I am ", 1000]}
        wrapper="span"
        speed={50}
        cursor={false}
        className="inline"
      />
      <span className="relative inline-block">
        <input
          autoFocus={true}
          className={clsx(
            "text-center bg-white rounded-lg focus:outline-none",
            "inline align-baseline",
            "border-b",
          )}
          value={name}
          onChange={handleNameChange}
          onKeyPress={handleNameSubmit}
          style={{
            width: `${name.length ? name.length + 1 : 2}ch`,
            minWidth: "2ch",
          }}
        />
        {!showSecondPart && !name && (
          <span className="inline text-sm text-gray-400">[Enter]</span>
        )}
      </span>
      {showSecondPart && (
        <>
          <TypeAnimation
            sequence={[
              " and I wanted to talk to you about ",
              typingDuration,
              () => setShowSelect(true),
            ]}
            wrapper="span"
            speed={50}
            cursor={false}
            className="inline"
          />
          {showSelect && (
            <select
              className="bg-white rounded-lg px-2 py-1 focus:outline-none ml-1 inline"
              value={topic}
              onChange={handleTopicChange}
            >
              <option value="" disabled>
                Select a topic
              </option>
              <option value="a new project">a new project</option>
              <option value="joining the team">joining the team</option>
              <option value="an internship">an internship</option>
              <option value="something else">something else</option>
            </select>
          )}
        </>
      )}
      {finalPart && (
        <TypeAnimation
          sequence={[finalPart, typingDuration]}
          wrapper="span"
          speed={50}
          cursor={false}
          className="inline"
          key={finalPart} // Key to force re-render when finalPart changes
        />
      )}
      {showEmailInput && (
        <>
          <div className="h-4" />
          <TypeAnimation
            sequence={[" And you can contact me at ", typingDuration]}
            wrapper="span"
            speed={50}
            cursor={false}
            className="inline-block"
          />
          <input
            id="emailInput"
            type="email"
            className={clsx(
              "text-center bg-white rounded-lg focus:outline-none",
              "inline-block align-baseline",
              "border-b",
            )}
            value={email}
            onChange={handleEmailChange}
            style={{
              width: `${email.length ? email.length + 1 : 2}ch`,
              minWidth: "2ch",
            }}
          />
        </>
      )}
    </div>
  );
};
