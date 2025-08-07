import type { Project, Specialization, Icon, FooterDetail } from '@/types/types';
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
		image: './images/restflowpage.png',
		link: 'https://github.com/urasinskipawel/Restflow-Page',
		describe:
			'Restflow Page is a modern company website designed for the RestFlow restaurant management system. It features a clean, responsive layout and focuses on presenting the product and its key benefits in a clear and professional way.',
		technologies: ['test'],
	},
	{
		title: 'Hotel App',
		image: './images/hotelapp.png',
		link: 'https://github.com/urasinskipawel/PoC-Hotel-App',
		describe:
			'A mobile app prototype designed for hotel management staff. It enables easy monitoring and coordination of room status across the hotel in a clear and intuitive interface. The app focuses on usability and efficient daily operations.',
		technologies: ['test'],
	},
	{
		title: 'Production Management App',
		image: './images/productionapp.png',
		link: 'https://github.com/urasinskipawel/Production-Management-App',
		describe:
			'A professional marketing‑style site built for a production planning and reporting platform. It highlights key functionality such as scheduling, inventory control, and reporting, all wrapped in a modern, business‑focused interface ',
		technologies: ['test'],
	},
	{
		title: 'MegaK Head Hunter',
		image: './images/megak.png',
		link: 'https://github.com/xyashino/MegaK-Head-Hunter-Front',
		describe:
			'A modern front‑end interface created for the MegaK Head Hunter recruitment platform. The design emphasizes clean visuals and intuitive navigation, ideal for showcasing candidate search tools and employer offerings',
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

export const footerDetails: FooterDetail[] = [
	{
		desc: 'Built with',
		name: 'Astro',
		icon: '/svg/astro.svg',
		alt: 'Astro Logo',
	},
	{
		desc: 'Styled with',
		name: 'TailwindCSS',
		icon: '/svg/tailwind.svg',
		alt: 'TailwindCSS Logo',
	},
	{
		desc: 'Deployed on',
		name: 'Vercel',
		icon: '/svg/vercel.svg',
		alt: 'Vercel Logo',
	},
];
