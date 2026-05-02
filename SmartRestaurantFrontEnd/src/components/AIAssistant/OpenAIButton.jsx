import React from "react";

function OpenAiButton({ text = "Ask AI 🤖", className = "", variant = "default" }) {

  const handleClick = () => {
    window.dispatchEvent(new Event("open-ai"));
  };

  // Icon-only button (floating / small)
  if (variant === "icon") {
    return (
      <button className={`ai-open-icon ${className}`} onClick={handleClick}>
        🤖
      </button>
    );
  }

  // Default button
  return (
    <button className={`ai-open-btn ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
}

export default OpenAiButton;