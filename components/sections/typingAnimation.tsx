import React, { useEffect, useState } from "react";
import styles from "./ta.module.css";

const words = ["Welcome", "To Our Site", "Explore Now", "Join Us"];

const TypingAnimation: React.FC = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [timeout, setTimeoutState] = useState<number | null>(null);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = 150; // Speed of typing
    const deletingSpeed = 75; // Speed of deleting

    const type = () => {
      setText((prevText) => currentWord.substring(0, prevText.length + 1));
      if (text === currentWord) {
        setIsDeleting(true);
        clearTimeout(timeout!);
        setTimeoutState(window.setTimeout(type, 2000)); // Pause before deleting
      } else {
        setTimeoutState(window.setTimeout(type, typingSpeed));
      }
    };

    const deleteText = () => {
      setText((prevText) => currentWord.substring(0, prevText.length - 1));
      if (text === "") {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        clearTimeout(timeout!);
        setTimeoutState(window.setTimeout(type, 500)); // Pause before typing new word
      } else {
        setTimeoutState(window.setTimeout(deleteText, deletingSpeed));
      }
    };

    if (isDeleting) {
      deleteText();
    } else {
      type();
    }

    return () => clearTimeout(timeout!);
  }, [text, isDeleting, wordIndex]);

  return (
    <div className={styles.typingContainer}>
      <span className={styles.typingText}>{text}</span>
    </div>
  );
};

export default TypingAnimation;
