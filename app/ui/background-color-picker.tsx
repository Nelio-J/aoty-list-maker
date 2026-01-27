import React, { useEffect, useState } from "react";
import { PickBackgroundColorProps } from "../lib/definitions";

export default function PickBackgroundColor({ value = "#000000", onChange }: PickBackgroundColorProps) {
  const [color, setColor] = useState<string>(value);

  useEffect(() => {
    setColor(value);
  }, [value]);

  function handleColorChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setColor(val);
    onChange?.(val);
  }

  return (
    <div className="relative flex items-center gap-3">
      {/* <h2 className="mr-2">Change List Background:</h2> */}
      <input id="colorInputColor" type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}