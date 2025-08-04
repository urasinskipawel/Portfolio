import type { InputProps } from '@/types/types';

export const TextAreaContactInput = ({ placeholder, value, onChange, onBlur, error }: InputProps) => (
	<>
		<label htmlFor='' className='sr-only' />
		<textarea
			className={`${error ? 'border-red-500' : 'border-[var(--white-icon-tr)]'} input-field`}
			value={value}
			onChange={onChange}
			onBlur={onBlur}
			placeholder={placeholder}
			rows={3}
		/>
	</>
);
