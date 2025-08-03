import type { InputProps } from '@/types/types';

export const EmailContactInput = ({ placeholder, value, onChange, onBlur, error }: InputProps) => (
	<>
		<label htmlFor={''} className='sr-only' />
		<input
			type='email'
			className={`${error ? 'border-red-500' : 'border-[var(--white-icon-tr)]'} bg-[var(--black)] block w-full max-w-lg rounded-lg border-2 px-4 py-4 text-sm text-[var(--white)] focus:outline-none focus:ring-2 focus:ring-[var(--blue)`}
			value={value}
			onChange={onChange}
			onBlur={onBlur}
			autoComplete='email'
			placeholder={placeholder}
		/>
	</>
);
