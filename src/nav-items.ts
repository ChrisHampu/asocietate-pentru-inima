import { projects } from './projects-data'

export interface NavChild {
  label: string
  period: string
  path: string
}

export interface NavItem {
  label: string
  path: string
  children?: NavChild[]
}

export const navItems: NavItem[] = [
  { label: 'Acasă', path: '/' },
  { label: 'Despre noi', path: '/about' },
  {
    label: 'Proiecte',
    path: '/projects',
    children: projects.map((project) => ({
      label: project.title,
      period: project.period,
      path: `/projects/${project.slug}`,
    })),
  },
  { label: 'Impact', path: '/impact' },
  { label: 'Implică-te', path: '/get-involved' },
  { label: 'Parteneri', path: '/partners' },
  { label: 'Shop', path: '/shop' },
  { label: 'Contact', path: '/contact' },
  { label: 'Donează', path: '/donate' },
]
