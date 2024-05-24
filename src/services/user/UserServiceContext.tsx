"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import {
  createDefaultUserService,
  UserService,
} from "@/services/user/UserService";
import { UserData } from "@/model/UserData";
import { useRouter } from "next/navigation";

const UserServiceContext = createContext<UserService | null>(null);
const UserDataContext = createContext<UserData>({
  achievements: {},
  quizzes: {},
  username: "",
});

export function UserDataProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData>({
    achievements: {},
    quizzes: {},
    username: "",
  });
  const userService = useMemo(() => createDefaultUserService(), []);

  userService.onUpdate = (userData: UserData) => {
    // copy the object, otherwise no update will be triggered
    setUserData({ ...userData });
  };

  useEffect(() => {
    userService.loadUser().then(async (userData) => {
      if (userData === null) {
        router.push("/");
      } else {
        setUserData(userData);
      }
    });
  }, [userService]);

  return (
    <UserServiceContext.Provider value={userService}>
      <UserDataContext.Provider value={userData}>
        {children}
      </UserDataContext.Provider>
    </UserServiceContext.Provider>
  );
}

export const useUserData = (): {
  userData: UserData;
  userStore: UserService;
} => {
  const userData = useContext(UserDataContext);
  const userStore = useContext(UserServiceContext);
  if (userData === null || userStore === null) {
    throw new Error("useUserData must be used within a UserDataProvider");
  }
  return { userData, userStore };
};
