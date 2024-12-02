import { useEffect, useState } from "react";

const TextChanger = () => {
  const texts = ["Hii, I'm Aditi", "Welcome to my portfolio", "Let's code together!"];
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);  // To track the current text
  const [isTyping, setIsTyping] = useState(true); // to check it's typing or deleting
  const [charIndex, setCharIndex] = useState(0); // Track index of current char typed/deleted

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        if (charIndex < texts[textIndex].length) {
          setCharIndex((prev) => prev + 1); // Keep typing
        } else {
          setIsTyping(false); // Switch to deleting after typing
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1); // Start deleting
        } else {
          setIsTyping(true); // Switch back to typing when deletion is done
          setTextIndex((prev) => (prev + 1) % texts.length); // Cycle through texts
        }
      }
    }, 100); // Change typing speed by adjusting this value

    return () => clearInterval(typingInterval);
  }, [charIndex, isTyping, textIndex, texts]);

  // Set the text to display based on current typing/deleting position
  useEffect(() => {
    setCurrentText(texts[textIndex].substring(0, charIndex));
  }, [charIndex, textIndex, texts]);

  return (
    <div className="transition-all duration-500">{currentText}</div>
  );
};

export default TextChanger;
