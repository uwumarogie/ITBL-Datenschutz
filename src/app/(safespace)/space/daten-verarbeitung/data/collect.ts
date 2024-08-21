import {useTranslations} from "next-intl";
import {useRawTranslations} from "@/services/messages/raw-translations-provider";

export namespace CollectData {

  export function useTermsLevel0() {
    const messages = useRawTranslations() as any
    return Object.values(messages.datenverarbeitung?.tags?.level0 ?? {}) as string[]
  }

  export function useTermsLevel1() {
    const messages = useRawTranslations() as any
    return Object.values(messages.datenverarbeitung?.tags?.level1 ?? {}) as string[]
  }

  export function useAllTerms() {
    const level0 = useTermsLevel0()
    const level1 = useTermsLevel1()
    return [...level0, ...level1]
      .sort()
      .reduce((acc, next) => {
        if (!acc.includes(next)) acc.push(next);
        return acc;
      }, [] as string[]);
  }

  export function useAllTermsTagged() {
    const messages = useRawTranslations() as any
    const level0 = messages.datenverarbeitung?.tags?.level0 ?? {}
    const level1 = messages.datenverarbeitung?.tags?.level1 ?? {}

    return {
      ...level0,
      ...level1
    }
  }

}
