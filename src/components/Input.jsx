import { useState } from "react";

export default function Input({ onAddText }) {
  const [text, setText] = useState("");

  return (
    <div className="shopping-input-query">
      <input
        value={text}
        onChange={(e) =>
          e.target.value.length <= 100 ? setText(e.target.value) : null
        }
        className="shopping-input"
        placeholder="Enter item"
      />
      <button onClick={() => onAddText(text)} className="shopping-input-btn">
        Add
      </button>
    </div>
  );
}
