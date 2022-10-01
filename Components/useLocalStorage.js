import { useState, useEffect } from "react";

// function getStorageValue(key, defaultValue) {
//   // getting stored value
//   const saved = localStorage.getItem(key);
//   const initial = JSON.parse(saved);
//   return initial || defaultValue;
// }




export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  function getStorageValue(key, defaultValue) {
    // getting stored value
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(key);
      const initial = saved !== null ? JSON.parse(saved) : defaultValue;
      return initial;
    } 
  }

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//         const saved = localStorage.getItem(key);
//         const initial = saved !== null ? JSON.parse(saved) : defaultValue;
//         return initial;
//       } 
//   }, [key, value])

//    useEffect(() => {
//      // storing input name
//      localStorage.setItem(key, JSON.stringify(value));
//    }, [key, value]);

  return [value, setValue];
};

