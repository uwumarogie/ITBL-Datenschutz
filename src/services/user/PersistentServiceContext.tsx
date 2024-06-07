import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { PersistUserService } from "@/services/user/PersistUserService";
import { UserData } from "@/model/UserData";
import { useRouter } from "next/navigation";

const UserServiceContext = createContext<PersistUserService | null>(null);
const UserDataContext = createContext<UserData | null>(null);

export function PersistentUserDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const userService = useMemo(() => new PersistUserService(), []);

  useEffect(() => {
    userService
      .getUser()
      .then((userData) => {
        if (userData === null) {
          router.push("/");
        } else {
          setUserData(userData);
        }
      })
      .catch(() => {
        router.push("/");
      });
  }, [userService, router]);

  return (
    <UserServiceContext.Provider value={userService}>
      <UserDataContext.Provider value={userData}>
        {children}
      </UserDataContext.Provider>
    </UserServiceContext.Provider>
  );
}

export const useUserData = (): {
  userData: UserData | null;
  userStore: PersistUserService | null;
} => {
  const userData = useContext(UserDataContext);
  const userStore = useContext(UserServiceContext);
  if (userData === null || userStore === null) {
    throw new Error("useUserData must be used within a UserDataProvider");
  }
  return { userData, userStore };
};
