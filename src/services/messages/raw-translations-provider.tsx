"use client"
import {AbstractIntlMessages} from "use-intl";
import {createContext, ReactNode, useContext} from "react";

type RawTranslationssContextType = {
  messages: AbstractIntlMessages
}

const RawTranslationsContext = createContext<RawTranslationssContextType | undefined>(undefined)

export default function RawTranslationsProvider({
  messages, children
}: {
  messages: AbstractIntlMessages,
  children: ReactNode
}) {
  return <>
    <RawTranslationsContext.Provider value={{messages}}>
      {children}
    </RawTranslationsContext.Provider>
  </>
}

export function useRawTranslations() {
  const context = useContext(RawTranslationsContext)
  if (!context) {
    throw new Error("useRawTranslations must be used within a RawTranslationsProvider");
  }
  return context.messages
}