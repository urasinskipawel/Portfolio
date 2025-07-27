import { IconContact, IconHome, IconProjects } from '@/icons/icons';
import type { NavItem } from '@/types/types';

export const navItems: NavItem[] = [
	{
		label: 'Home',
		href: '#home',
		icon: IconHome,
	},
	{
		label: 'Projects',
		href: '#projects',
		icon: IconProjects,
	},
	{
		label: 'Contact',
		href: '#contact',
		icon: IconContact,
	},
];
