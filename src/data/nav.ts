export const navItems = [
  {
    label: "Conception",
    href: "/conception",
    dropdown: [
      { label: "3D",        href: "/3d" },
      { label: "Bricolage", href: "/Conception/bricolage/" },
    ]
  },
  { label: "Graphisme", href: "/graphisme",  dropdown: [
      { label: "Graffs",        href: "/graphisme/graffs" },
      { label: "Dessins", href: "/graphisme/dessins" },
      {label: "Pochoirs", href: "/graphisme/pochoirs"}
    ] },
  { label: "A Propos",  href: "/a-propos" },
  { label: "Contact",   href: "/contact", class: "btn-contact" },
];