export interface NavItem {
  label: string
  path: string
}

export const navItems: NavItem[] = [
  { label: 'Acasă', path: '/' },
  { label: 'Despre noi', path: '/about' },
  { label: 'Proiecte', path: '/projects' },
  { label: 'Impact', path: '/impact' },
  { label: 'Implică-te', path: '/get-involved' },
  { label: 'Parteneri', path: '/partners' },
  { label: 'Shop', path: '/shop' },
  { label: 'Contact', path: '/contact' },
  { label: 'Donează', path: '/donate' },
]
