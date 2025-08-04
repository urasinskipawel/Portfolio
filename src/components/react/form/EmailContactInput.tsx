import type { InputProps } from '@/types/types';

export const EmailContactInput = ({ placeholder, value, onChange, onBlur, error }: InputProps) => (
	<>
		<label htmlFor={''} className='sr-only' />
		<input
			type='email'
			className={`${error ? 'border-red-500' : 'border-[var(--white-icon-tr)]'} input-field`}
			value={value}
			onChange={onChange}
			onBlur={onBlur}
			autoComplete='email'
			placeholder={placeholder}
		/>
	</>
);
