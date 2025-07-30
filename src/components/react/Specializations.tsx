import React, { useState } from 'react';
import { specializations } from '@/constants/constants';
import { ToogleArrowIcon } from '@/icons/icons';

export const Specializations = () => {
	const [openItem, setOpenItem] = useState<string | null>(null);

	const toggleItem = (item: string) => {
		setOpenItem(openItem === item ? null : item);
	};

	return (
		<div className='text-left pt-3 md:pt-9'>
			<h3 className='text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6'>What I do?</h3>
			<ul className='space-y-4 mt-4 text-lg'>
				{specializations.map(specialization => (
					<li key={specialization.name} className='w-full'>
						<div
							onClick={() => toggleItem(specialization.name)}
							className='md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden'>
							<div className='flex items-center gap-3 p-4'>
								{<specialization.icon />}
								<div className='flex items-center gap-2 flex-grow justify-between'>
									<div className='min-w-0 max-w-[200px] md:max-w-none overflow-hidden'>
										<span className='block truncate text-[var(--white)] text-lg'>{specialization.name}</span>
									</div>
									<ToogleArrowIcon rotate={openItem === specialization.name ? 'rotate-180' : ''} />
								</div>
							</div>
							<div
								className={`transition-all duration-300 px-4 ${
									openItem === specialization.name ? 'max-h-[500px] pb-4 opacity-100' : 'max-h-0 opacity-0'
								}`}>
								<ul className='space-y-2 text-[var(--white-icon)] text-sm'>
									{specialization.details.map((item, index) => (
										<li key={index} className='flex items-center pl-1 text-[var(--white-icon)] text-sm'>
											<span className='pr-2'>•</span>
											{item}
										</li>
									))}
								</ul>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
