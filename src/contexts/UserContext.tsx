import { ReactNode, createContext, useEffect, useState } from "react";
import axios from "axios";

interface User {
  name: string;
  avatar_url: string;
  bio: string;
  html_url: string;
  login: string;
  company: string;
  followers: number;
}

export interface PostItem {
  id: number;
  title: string;
  body: string;
  updated_at: string;
  number: number;
}

interface Post {
  total_count: number;
  items: PostItem[];
}

interface UserContextType {
  userData: User | null;
  posts: Post | null;
}

export const UserContext = createContext({} as UserContextType);

interface UserContextTypeProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextTypeProps) {
  const [userData, setUserData] = useState<User | null>(null);
  const [posts, setPosts] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/users/MarlonChi"
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching GitHub user data:", error);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/issues?q=%20repo:MarlonChi/lorem-blog`
      );
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching GitHub post data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchPosts();
  }, []);

  return (
    <UserContext.Provider value={{ userData, posts }}>
      {children}
    </UserContext.Provider>
  );
}
