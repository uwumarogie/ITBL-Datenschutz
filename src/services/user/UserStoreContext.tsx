"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { LocalStorageUserStore } from '@/services/user/LocalStorageUserStore';
import { UserStore } from '@/services/user/UserStore';

const userStore = new LocalStorageUserStore();
const UserStoreContext = createContext<UserStore | null>(userStore);

export function UserStoreProvider({ children }: any) {
  return (
    <UserStoreContext.Provider value={userStore}>
      {children}
    </UserStoreContext.Provider>
  );
};

export const useUserStore = (): UserStore => {
  const context = useContext(UserStoreContext);
  if (context === null) {
    throw new Error('useUserStore must be used within a UserStoreProvider');
  }
  console.log(context)
  return context;
};
