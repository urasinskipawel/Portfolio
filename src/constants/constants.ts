import type { Project, Specialization, Icon } from '@/types/types';
import {
	DesignIcon,
	IconContact,
	IconHome,
	IconProjects,
	MobileIcon,
	WebIcon,
	IconGithub,
	IconLinkedin,
	IconMail,
} from '@/icons/icons';

export const navItems: Icon[] = [
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
export const socialLinks: Icon[] = [
	{
		label: 'GitHub',
		href: 'https://github.com/urasinskipawel',
		icon: IconGithub,
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/pawel-urasinski',
		icon: IconLinkedin,
	},
	{
		label: 'Email',
		href: 'https://mail.google.com/mail/u/0/?fs=1&to=uraspawel@gmail.com&su=Hello+Pawe%C5%82+!&tf=cm',
		icon: IconMail,
	},
];

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
		details: ['Single Page Applications', 'Landing pages and business websites', 'Next-gen web apps'],
		icon: WebIcon,
	},
	{
		name: 'Mobile Development',
		details: [
			'React Native mobile apps',
			'Maintain and improve clients apps',
			'Publishing apps (Google Play & Apple App Store)',
		],
		icon: MobileIcon,
	},
	{
		name: 'AI & Prototyping',
		details: ['Prototyping for websites & mobile apps', 'Learning AI automation and building agents'],
		icon: DesignIcon,
	},
];

export const projects: Project[] = [
	{
		title: 'Restflow Page',
		image: '',
		link: 'https://github.com/urasinskipawel/Restflow-Page',
		describe: 'https://movies-for-devs.vercel.app',
		technologies: ['test'],
	},
	{
		title: 'Hotel App',
		image: '',
		link: 'https://github.com/urasinskipawel/PoC-Hotel-App',
		describe: 'https://stockin-demo.vercel.app',
		technologies: ['test'],
	},
	{
		title: 'Production Management App',
		image: '',
		link: 'https://github.com/urasinskipawel/Production-Management-App',
		describe: 'https://svgl.app',
		technologies: ['test'],
	},
	{
		title: 'MegaK-Head-Hunter-Front',
		image: '',
		link: 'https://github.com/xyashino/MegaK-Head-Hunter-Front',
		describe: 'https://tron-legacy-web.vercel.app/',
		technologies: ['test'],
	},
	// 	{
	// 	title: 'Star Wars Universe',
	// 	image: '',
	// 	link: 'https://github.com/urasinskipawel/Star-Wars-Universe',
	// 	describe: 'https://tron-legacy-web.vercel.app/',
	// 	technologies: ['test'],
	// },
];
