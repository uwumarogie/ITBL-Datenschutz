import { useLocale } from "next-intl"

export default function LanguageSwitcher() {
    const locale = useLocale()

    const onSelectChange = (locale: string) => {
        document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${7 * 24 * 60 * 60}`;
        window.location.reload(); // Optionally reload the page to apply the locale change
    }

    return (
        <>
            {
                locale === 'de' ? (
                    <span className="text-2xl hover:cursor-pointer" onClick={() => onSelectChange('en')}>
                        🇩🇪
                    </span>
                ) : (
                    <span className="text-2xl hover:cursor-pointer" onClick={() => onSelectChange('de')}>
                        🇺🇸
                    </span>
                )
            }
        </>
    )
}