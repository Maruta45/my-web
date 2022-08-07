/** @format */
import { motion } from 'framer-motion';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

import Layout from '../components/Layout';

const myContact = [
	{
		id: 1,
		icon: <FaWhatsapp />,
		url: 'https://wa.me/628883929919',
		style: 'text-green-500 hover:text-green-600 active:text-green-700 text-3xl sm:text-5xl',
		variants: {
			hidden: {
				y: '-100vh',
				opacity: 0,
			},
			visible: {
				y: 0,
				opacity: 1,
				transition: {
					delay: 0.5,
					duration: 1,
					type: 'spring',
					mass: 0.5,
					damping: 5,
				},
			},
		},
	},
	{
		id: 2,
		icon: <FaTelegram />,
		url: 'https://t.me/Rio_31',
		style: 'text-sky-500 hover:text-sky-600 active:text-sky-700 text-3xl sm:text-5xl',
		variants: {
			hidden: {
				y: '-100vh',
				opacity: 0,
			},
			visible: {
				y: 0,
				opacity: 1,
				transition: {
					delay: 1,
					duration: 1,
					type: 'spring',
					mass: 0.5,
					damping: 5,
				},
			},
		},
	},
];

const containerVariant = {
	hidden: {
		opacity: 0,
		y: '-100vh',
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 1,
			duration: 0.5,
			when: 'beforeChildren',
		},
	},
};

const Contact = () => {
	return (
		<Layout>
			<motion.div variants={containerVariant} initial='hidden' animate='visible' className='flex justify-center items-center'>
				<div className='max-w-7xl text-lg sm:text-3xl text-white my-72 space-y-8 flex flex-col justify-center items-center'>
					<p>Want me to take a part into your project?</p>
					<p>Contact me </p>
					<div className='space-x-4 flex justify-center'>
						{myContact.map((item, index) => {
							return (
								<motion.a variants={item.variants} href={item.url} className={item.style} target='_blank' rel='noreferrer' key={index}>
									{item.icon}
								</motion.a>
							);
						})}
					</div>
				</div>
			</motion.div>
		</Layout>
	);
};

export default Contact;
