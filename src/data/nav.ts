export const navItems = [
  {
    label: "Conception",
    href: "/conception",
    dropdown: [
      { label: "3D",        href: "/3d" },
      { label: "Bricolage", href: "/bricolage" },
    ]
  },
  { label: "Graphisme", href: "/graphisme",  dropdown: [
      { label: "Graffs",        href: "/graffs" },
      { label: "Dessins", href: "/dessins" },
      {label: "Pochoirs", href: "/pochoirs"}
    ] },
  { label: "A Propos",  href: "/a-propos" },
  { label: "Contact",   href: "/contact", class: "btn-contact" },
];