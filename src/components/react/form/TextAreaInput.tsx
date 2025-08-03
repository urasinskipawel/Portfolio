import type { InputProps } from '@/types/types';

export const TextAreaContactInput = ({ placeholder, value, onChange, onBlur, error }: InputProps) => (
	<>
		<label htmlFor='' className='sr-only' />
		<textarea
			className={`${
				error ? 'border-red-500' : 'border-[var(--white-icon-tr)]'
			} bg-[var(--black)] block w-full max-w-lg rounded-lg border-2 px-4 py-4 text-sm text-[var(--white)] focus:outline-none focus:ring-2 focus:ring-[var(--blue)] resize-none`}
			value={value}
			onChange={onChange}
			onBlur={onBlur}
			placeholder={placeholder}
			rows={3}
		/>
	</>
);
