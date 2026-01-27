'use client'

import { useState, useEffect, Dispatch, SetStateAction } from "react";

// <Type> is a Generic type. It says “this function works with any type, just call it Type for now”. 
// It let's the caller decide what the Type actually is (string, number, an array of objects, etc.). 
// This makes the hook more dynamic.
function getStorageValue<Type>(key: string, initialValue: Type): Type {
  if (typeof window === "undefined") return initialValue;
  const saved = localStorage.getItem(key);
  return saved ? (JSON.parse(saved) as Type) : initialValue;
}

export const useLocalStorage = <Type>(key: string, initialValue: Type): [Type, Dispatch<SetStateAction<Type>>] => {
  const [value, setValue] = useState<Type>(() => {
    return getStorageValue<Type>(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};