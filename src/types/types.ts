export interface Icon {
	label: string;
	href: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Specialization {
	name: string;
	details: string[];
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Project {
	title: string;
	image: string;
	link: string;
	describe: string;
	technologies: string[];
}
export interface LetterGlitchAnimation {
	glitchColors: string[];
	glitchSpeed: number;
	centerVignette: boolean;
	outerVignette: boolean;
	smooth: boolean;
}
export type ToogleArrowIconProps = {
	rotate: string;
};
