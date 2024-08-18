import React from "react";
import { useTranslations } from "next-intl";

export default function Impressum() {
  const t = useTranslations('impressum');

  return (
    <div className="px-8 w-full h-full overflow-y-auto">
      <div className="max-w-[800px]">
        <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
        <p className="mb-4">
          {t('info')}
          <br />
          {t('addressName')}
          <br />
          {t('addressStreet')}
          <br />
          {t('addressZipCity')}
        </p>
        <p className="mb-4">
          {t('contact')}:
          <br />
          {t('contactName')}
          <br />
          {t('contactEmail')}
          <br />
          {t('contactPhone')}
        </p>
        <p className="mb-4">
          {t('euDisputeResolution')}
          <br />
          {t('euDisputeResolutionLink')}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          .<br />
          {t('euDisputeResolutionEmail')}
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          {t('disclaimerTitle')}
        </h2>
        <h3 className="text-lg font-semibold mt-4 mb-2">{t('disclaimerContentTitle')}</h3>
        <p className="mb-4">
          {t('disclaimerContent')}
        </p>
        <p className="mb-4">
          {t('disclaimerContentContinuation')}
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">{t('linksTitle')}</h3>
        <p className="mb-4">
          {t('linksContent')}
        </p>
        <p className="mb-4">
          {t('linksContentContinuation')}
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">{t('copyrightTitle')}</h3>
        <p className="mb-4">
          {t('copyrightContent')}
        </p>
        <p>
          {t('copyrightContentContinuation')}
        </p>
      </div>
    </div>
  );
}
