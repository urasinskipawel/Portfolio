export interface NavItem {
	label: string;
	href: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Specialization {
	name: string;
	details: string[];
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export type ToogleArrowIconProps = {
  rotate: string; 
};