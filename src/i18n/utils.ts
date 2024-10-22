import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL): string {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang;
    return defaultLang;
}

export function useTranslations(lang: string) {
    return function t(key: string) {
        return key.split('.').reduce((obj, k) => obj && obj[k], ui[lang] as any) || key;
    }
}

export function getRouteFromUrl(url: URL): string {
    const [, , ...rest] = url.pathname.split('/');
    return rest.join('/') || '';
}