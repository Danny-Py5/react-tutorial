import { useState, useEffect } from "react";
import { useDebounceHook } from "./useDebounceHook.js";

export function SearchFood() {
  const [search, setSearch] = useState("");
  const [searchedWord, setSearchedWord] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const debounceSearch = useDebounceHook(search, 1000);

  let timeout;
  const handleTyping = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      setIsTyping(false);
    }, 1000);
  };

  useEffect(() => {
    const foodList = [
      "Rice",
      "Beans",
      "Bread",
      "Yam",
      "Fufu",
      "Amala",
      "Spaghetti",
      "Indomie",
      "Eba",
      "Pounded Yam",
      "Moi Moi",
      "Akara",
      "Plantain",
      "Jollof Rice",
      "Fried Rice",
    ];
    if (debounceSearch) {
      const matchingWord = foodList.find((food) => {
        return food.toLowerCase().includes(debounceSearch.toLowerCase());
      });
      setIsTyping(false);
      matchingWord
        ? setSearchedWord(matchingWord)
        : setSearchedWord("Food not found!");
    }
  }, [debounceSearch]);

  return (
    <div>
      <h1>Search for food</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={() => {
          setIsTyping(true);
        }}
        onKeyUp={handleTyping}
      />
      <br />
      <p>Searched word: {isTyping ? "typing..." : searchedWord}</p>
    </div>
  );
}
