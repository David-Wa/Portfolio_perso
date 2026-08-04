type NavItem = {
  label: string;
  href?: string;
  class?: string;
  dropdown?: Array<{ label: string; href: string }>;
};

type CategorySection = {
  key: 'prototypage' | 'graphisme';
  label: string;
  subcategories: Array<{ key: string; label: string; href: string }>;
};

export function getLocalizedPath(path: string, locale: 'fr' | 'en' = 'fr') {
  if (!path || path.startsWith('#') || path.startsWith('http')) return path;
  if (path.startsWith('/en')) return path;

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return locale === 'en' ? `/en${normalizedPath}` : normalizedPath;
}

export function getCategorySections(locale: 'fr' | 'en' = 'fr'): CategorySection[] {
  const isEnglish = locale === 'en';

  return [
    {
      key: 'prototypage',
      label: isEnglish ? 'Prototyping' : 'Prototypage',
      subcategories: [
          { key: 'Woodworking', label: isEnglish ? 'Woodworking' : 'Woodworking', href: getLocalizedPath('/prototypage/bricolage/', locale) },
        { key: '3d', label: '3D', href: getLocalizedPath('/prototypage/3d/', locale) },
      
      ],
    },
    {
      key: 'graphisme',
      label: isEnglish ? 'Graphic Design' : 'Graphisme',
      subcategories: [
        { key: 'graffs', label: isEnglish ? 'Graffiti' : 'Graffs', href: getLocalizedPath('/graphisme/graffs/', locale) },
        { key: 'dessins', label: isEnglish ? 'Drawings' : 'Dessins', href: getLocalizedPath('/graphisme/dessins/', locale) },
        { key: 'pochoirs', label: isEnglish ? 'Stencils' : 'Pochoirs', href: getLocalizedPath('/graphisme/pochoirs/', locale) },
        { key: 'fresques', label: isEnglish ? 'Murals' : 'Fresques', href: getLocalizedPath('/graphisme/fresques/', locale) },
      ],
    },
  ];
}

export function getNavItems(locale: 'fr' | 'en' = 'fr'): NavItem[] {
  const isEnglish = locale === 'en';

  return getCategorySections(locale).map((section) => ({
    label: section.label,
    href: section.subcategories[0]?.href,
  })).concat([
    { label: isEnglish ? 'About' : 'A Propos', href: getLocalizedPath('/#about', locale) },
    { label: isEnglish ? 'Contact' : 'Contact', href: getLocalizedPath('/#contact', locale), class: 'btn-contact' },
  ]);
}