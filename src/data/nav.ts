type NavItem = {
  label: string;
  href?: string;
  class?: string;
  dropdown?: Array<{ label: string; href: string }>;
};

export function getLocalizedPath(path: string, locale: 'fr' | 'en' = 'fr') {
  if (!path || path.startsWith('#') || path.startsWith('http')) return path;
  if (path.startsWith('/en')) return path;

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return locale === 'en' ? `/en${normalizedPath}` : normalizedPath;
}

export function getNavItems(locale: 'fr' | 'en' = 'fr'): NavItem[] {
  const isEnglish = locale === 'en';

  return [
    {
      label: isEnglish ? 'Design' : 'Conception',
      dropdown: [
        { label: '3D', href: getLocalizedPath('/conception/3d/', locale) },
        { label: isEnglish ? 'DIY' : 'Bricolage', href: getLocalizedPath('/conception/bricolage/', locale) },
      ],
    },
    {
      label: isEnglish ? 'Graphics' : 'Graphisme',
      dropdown: [
        { label: isEnglish ? 'Graffiti' : 'Graffs', href: getLocalizedPath('/graphisme/graffs/', locale) },
        { label: isEnglish ? 'Drawings' : 'Dessins', href: getLocalizedPath('/graphisme/dessins/', locale) },
        { label: isEnglish ? 'Stencils' : 'Pochoirs', href: getLocalizedPath('/graphisme/pochoirs/', locale) },
        { label: isEnglish ? 'Murals' : 'Fresques', href: getLocalizedPath('/graphisme/fresques/', locale) },
      ],
    },
    { label: isEnglish ? 'About' : 'A Propos', href: getLocalizedPath('/#about', locale) },
    { label: isEnglish ? 'Contact' : 'Contact', href: getLocalizedPath('/#contact', locale), class: 'btn-contact' },
  ];
}