import type { Specialization } from '@/types/types';
import { DesignIcon, IconContact, IconHome, IconProjects, MobileIcon, WebIcon } from '@/icons/icons';
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

export const socialLinks = {
	github: 'https://github.com/urasinskipawel',
	linkedIn: 'https://www.linkedin.com/in/pawel-urasinski',
	gmail: 'https://mail.google.com/mail/u/0/?fs=1&to=uraspawel@gmail.com&su=Hello+Pawe%C5%82+!&tf=cm',
};
export const technologies = [
	'astro',
	'next',
	'react',
	'reactNative',
	'expo',
	'typeScript',
	'tailwind',
	'HTML5',
	'CSS3',
	'javaScript',
	'node',
	'git',
	'firebase',
	'mysql',
];

export const specializations: Specialization[] = [
	{
		name: 'Web Development',
		details: ['Single Page Applications (SPAs)', 'Landing pages and business websites', 'Portfolio websites'],
		icon: WebIcon,
	},
	{
		name: 'Mobile Development',
		details: ['Mobile-friendly web apps', 'React Native mobile apps'],
		icon: MobileIcon,
	},
	{
		name: 'AI & Prototyping',
		details: ['Prototyping for websites & mobile apps'],
		icon: DesignIcon,
	},
];
