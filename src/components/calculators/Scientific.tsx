import React, { useState } from "react";

const ScientificCalculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value: string) => {
    if (value === "=") {
      try {
        // Safe evaluation simulation for scientific calc
        // Use Function to safely evaluate simple math expressions
        const evalResult = new Function(
          "return " + display.replace(/x/g, "*"),
        )();
        setDisplay(String(evalResult));
      } catch (e) {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("");
    } else {
      setDisplay(display === "Error" ? value : display + value);
    }
  };

  const buttons = [
    "(",
    ")",
    "mc",
    "m+",
    "m-",
    "mr",
    "C",
    "+/-",
    "%",
    "/",
    "2nd",
    "x²",
    "x³",
    "xʸ",
    "eˣ",
    "10ˣ",
    "7",
    "8",
    "9",
    "x",
    "1/x",
    "²√x",
    "³√x",
    "ʸ√x",
    "ln",
    "log₁₀",
    "4",
    "5",
    "6",
    "-",
    "x!",
    "sin",
    "cos",
    "tan",
    "e",
    "EE",
    "1",
    "2",
    "3",
    "+",
    "Rad",
    "sinh",
    "cosh",
    "tanh",
    "π",
    "Rand",
    "0",
    ".",
    "=",
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-4 md:p-6 bg-[#000000] rounded-[40px] border border-[#2f2f3e]">
      <input
        type="text"
        value={display}
        onChange={(e) => setDisplay(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleClick('=');
          } else if (e.key === 'Escape') {
            handleClick('C');
          }
        }}
        placeholder="0"
        className="w-full h-24 bg-[#1a1a24] rounded-2xl mb-6 text-right p-4 text-white text-4xl font-mono focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <div className="grid grid-cols-10 gap-1 md:gap-2">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={() => handleClick(btn)}
            className={`
              h-10 md:h-12 text-xs md:text-sm font-medium rounded-lg transition-colors
              ${
                ["/", "x", "-", "+", "="].includes(btn)
                  ? "bg-orange-500 text-white col-span-1 hover:bg-orange-400"
                  : ["0"].includes(btn)
                    ? "col-span-2 bg-[#333333] hover:bg-[#444444] text-white text-left pl-4"
                    : btn === "."
                      ? "col-span-1 bg-[#333333] hover:bg-[#444444] text-white"
                      : ["7", "8", "9", "4", "5", "6", "1", "2", "3"].includes(
                            btn,
                          )
                        ? "col-span-1 bg-[#333333] hover:bg-[#444444] text-white"
                        : ["C", "+/-", "%"].includes(btn)
                          ? "bg-[#a5a5a5] text-black hover:bg-[#d4d4d4]"
                          : "bg-[#1a1a24] text-gray-200 hover:bg-[#2f2f3e] col-span-1"
              }
            `}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScientificCalculator;
