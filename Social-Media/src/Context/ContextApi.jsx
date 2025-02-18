import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [homeSection, setHomeSection] = useState(true);
  const [posts, setPosts] = useState([]);
  const handleOnClickHome = () => {
    setHomeSection((prev) => !prev);
  };
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((json) => setPosts(json.posts));
  }, []);
  const handleCreatePost = (post) => {
    setPosts((prev) => [...prev, post])
  }
  return (
    <Context.Provider value={{ homeSection, handleOnClickHome, posts, handleCreatePost }}>
      {children}
    </Context.Provider>
  );
};
