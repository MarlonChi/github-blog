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

interface UserContextType {
  userData: User | null;
}

export const UserContext = createContext({} as UserContextType);

interface UserContextTypeProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextTypeProps) {
  const [userData, setUserData] = useState<User | null>(null);

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

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  );
}
