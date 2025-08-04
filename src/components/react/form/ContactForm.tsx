import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextInput } from '@/components/react/form/TextInput';
import type { ContactFormInputs } from '@/types/types';
import { EmailContactInput } from './EmailContactInput';
import { TextAreaContactInput } from './TextAreaInput';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const {
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm<ContactFormInputs>();

	const onSubmit = (data: ContactFormInputs) => {
		console.log('Dane formularza:', data);
		const templateParams = {
			fullName: data.fullName,
			email: data.email,
			message: data.message,
			subject: data.subject,
		};

		emailjs.send('service_w1kv8ha', 'template_lf0a3kl', templateParams, 'zQqldSKjiSNLECa8i').then(
			response => {
				console.log('SUCCESS!', response.status, response.text);
				setIsSubmitted(true);
				reset();
			},
			error => {
				console.error('FAILED...', error);
			}
		);

		setIsSubmitted(true);
	};

	const handleClear = () => {
		reset();
	};

	return (
		<>
			<div className='pt-1 flex flex-col max-w-md mx-auto'>
				{isSubmitted && (
					<h2 className='text-center text-3xl md:text-4xl font-medium text-[var(--white)]'>Thank you for your message</h2>
				)}
				{!isSubmitted && (
					<form className='flex flex-col max-w-md ' onSubmit={handleSubmit(onSubmit)}>
						<div className='flex flex-col gap-5'>
							<div className='w-full max-w-md mx-auto'>
								<Controller
									name='fullName'
									control={control}
									defaultValue=''
									rules={{ required: 'This field is required' }}
									render={({ field }) => (
										<>
											<TextInput {...field} placeholder='Name' error={errors.fullName} />
											{errors.fullName && <span className='text-red-500'>{errors.fullName.message}</span>}
										</>
									)}
								/>
							</div>
							<div className='w-full max-w-md mx-auto'>
								<Controller
									name='email'
									control={control}
									defaultValue=''
									rules={{
										required: 'This field is required',
										pattern: {
											value: /^\S+@\S+$/i,
											message: 'Invalid e-mail format',
										},
									}}
									render={({ field }) => (
										<>
											<EmailContactInput {...field} placeholder='E-mail' error={errors.email} />
											{errors.email && <span className='text-red-500'>{errors.email.message}</span>}
										</>
									)}
								/>
							</div>
							<div className='w-full max-w-md mx-auto'>
								<Controller
									name='subject'
									control={control}
									defaultValue=''
									rules={{ required: 'This field is required' }}
									render={({ field }) => (
										<>
											<TextInput {...field} placeholder='Subject' error={errors.fullName} />
											{errors.fullName && <span className='text-red-500'>{errors.fullName.message}</span>}
										</>
									)}
								/>
							</div>
							<div className='w-full max-w-md mx-auto'>
								<Controller
									name='message'
									control={control}
									defaultValue=''
									rules={{ required: 'This field is required' }}
									render={({ field }) => (
										<>
											<TextAreaContactInput {...field} placeholder='Your message' error={errors.message} />
											{errors.message && <span className='text-red-500'>{errors.message.message}</span>}
										</>
									)}
								/>
							</div>
						</div>
						<div className='flex flex-row-reverse justify-center lg:justify-start gap-6 lg:order-4 pt-6 max-w-lg'>
							<button type='submit' className='w-32 rounded bg-[var(--blue)] text-white hover:bg-[#3a3ad6]'>
								Submit
							</button>
							<button
								type='reset'
								className='clear-btn w-32 rounded bg-[var(--black)] p-2 text-[var(--blue)] shadow-md hover:bg-[var(--white-icon-tr)] '
								onClick={handleClear}>
								Clear
							</button>
						</div>
					</form>
				)}
			</div>
		</>
	);
};
