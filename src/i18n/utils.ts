import { defaultLang, ui } from './ui.ts';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: string) {
        return key.split('.').reduce((obj, k) => obj && obj[k], ui[lang] as any) || key;
    }
}