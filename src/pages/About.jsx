/** @format */
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaFacebookSquare, FaReact, FaNodeJs, FaNpm, FaYarn, FaHtml5, FaCss3, FaBootstrap, FaMarkdown, FaFigma, FaTrello } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiAdobeillustrator, SiNetlify, SiPostman } from 'react-icons/si';

import profileImage from '../assets/images/rio.jpg';

import Layout from '../components/Layout';

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

const motionDescription = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 0.5,
			duration: 0.5,
		},
	},
};
const motionLanguage = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 1,
			duration: 0.5,
		},
	},
};
const motionTech = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 1.5,
			duration: 0.5,
		},
	},
};
const motionSocialMedia = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 2,
			duration: 0.5,
		},
	},
};

const myLink = [
	{
		name: 'Github',
		icon: <FaGithub />,
		link: 'https://github.com/Maruta45',
		style: 'text-4xl text-gray-600 hover:text-gray-700 dark:text-gray-700 hover:dark:text-slate-100',
	},
	{
		name: 'LinkedIn',
		icon: <FaLinkedin />,
		link: 'https://www.linkedin.com/in/rio-dwi-syahputra-17024416b/',
		style: 'text-4xl text-blue-500 hover:text-blue-600',
	},
	{
		name: 'Instagram',
		icon: <FaInstagram />,
		link: 'https://instagram.com/riodwisyahputra7836',
		style: 'text-4xl text-pink-500 hover:text-pink-600',
	},
	{
		name: 'Youtube',
		icon: <FaYoutube />,
		link: 'https://camo.githubusercontent.com/3c9da2a98062b49d867ccd9ca1d11e7b2ebc1201031ac97eddf42cca8d365b5f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f596f75547562652d2532334646303030302e7376673f6c6f676f3d596f7554756265266c6f676f436f6c6f723d7768697465',
		style: 'text-4xl text-red-500 hover:text-red-600',
	},
	{
		name: 'Facebook',
		icon: <FaFacebookSquare />,
		link: 'https://camo.githubusercontent.com/6507b6af1fa0c23a32321b4594fe0f353fc56a2e6721ea67a5f51cd830c85b61/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f46616365626f6f6b2d2532333138373746322e7376673f6c6f676f3d46616365626f6f6b266c6f676f436f6c6f723d7768697465',
		style: 'text-4xl text-blue-700 hover:text-blue-800',
	},
];
const tech = [
	{
		id: 1,
		icon: <FaReact />,
		style: 'text-4xl py-3 text-blue-500 hover:text-blue-600',
	},
	{
		id: 2,
		icon: <SiNextdotjs />,
		style: 'text-4xl py-3 text-slate-500 hover:text-slate-600',
	},
	{
		id: 3,
		icon: <FaNodeJs />,
		style: 'text-4xl py-3 text-green-500 hover:text-green-600',
	},
	{
		id: 4,
		icon: <FaNpm />,
		style: 'text-4xl py-3 text-red-500 hover:text-red-600',
	},
	{
		id: 5,
		icon: <FaYarn />,
		style: 'text-4xl py-3 text-cyan-500 hover:text-cyan-600',
	},
	{
		id: 6,
		icon: <FaHtml5 />,
		style: 'text-4xl py-3 text-orange-500 hover:text-orange-600',
	},
	{
		id: 7,
		icon: <FaCss3 />,
		style: 'text-4xl py-3 text-cyan-500 hover:text-cyan-600',
	},
	{
		id: 8,
		icon: <FaBootstrap />,
		style: 'text-4xl py-3 text-indigo-500 hover:text-indigo-600',
	},
	{
		id: 9,
		icon: <SiTailwindcss />,
		style: 'text-4xl py-3 text-cyan-500 hover:text-cyan-600',
	},
	{
		id: 10,
		icon: <FaMarkdown />,
		style: 'text-4xl py-3 text-slate-700 hover:text-slate-800',
	},
	{
		id: 11,
		icon: <FaFigma />,
		style: 'text-4xl py-3 text-red-400 hover:text-red-500',
	},
	{
		id: 12,
		icon: <SiAdobeillustrator />,
		style: 'text-4xl py-3 text-orange-500 hover:text-orange-600',
	},
	{
		id: 13,
		icon: <FaTrello />,
		style: 'text-4xl py-3 text-blue-700 hover:text-blue-800',
	},
	{
		id: 14,
		icon: <SiNetlify />,
		style: 'text-4xl py-3 text-cyan-500 hover:text-cyan-600',
	},
	{
		id: 15,
		icon: <SiPostman />,
		style: 'text-4xl py-3 text-orange-500 hover:text-orange-600',
	},
];

const About = () => {
	return (
		<Layout>
			<motion.div variants={containerVariant} initial='hidden' animate='visible' className='h-auto text-white selection:bg-slate-100/90 selection:text-black'>
				<div>
					<div className='flex flex-col space-y-6 justify-center items-center pt-12'>
						<img src={profileImage} alt='profile' className='w-32 h-32 rounded-full' />
						<h1 className='text-center font-bold text-3xl dark:text-white'>Rio Dwi Syahputra</h1>
					</div>
					<div className='flex justify-center pt-6'>
						<div className='p-4'>
							<div className='dark:text-white my-6 space-y-6'>
								<div className='space-y-6'>
									<motion.div variants={motionDescription} className='font-bold flex flex-col text-center space-y-4'>
										<h1 className='text-2xl text-white'>Description</h1>
										<p className='font-normal flex justify-center text-normal'> Hi there, you can call me Rio. I likes to Watching Movies, Anime, Listening Music, Cycling and also Coding</p>
									</motion.div>
									<motion.div variants={motionLanguage} className='font-bold flex flex-col text-center space-y-4'>
										<h1 className='text-2xl text-white'>Languages</h1>
										<p className='font-normal flex justify-center'>Indonesia, English, Javanese</p>
									</motion.div>
									<motion.div variants={motionTech} className='font-bold flex flex-col text-center space-y-4'>
										<h1 className='text-2xl text-white'>Tech Stack</h1>
										<div className='font-normal flex justify-center flex-wrap space-x-4'>
											{tech.map((item) => {
												return (
													<div key={item.id} className={item.style}>
														{item.icon}
													</div>
												);
											})}
										</div>
									</motion.div>
								</div>
								<motion.div variants={motionSocialMedia}>
									<h1 className='text-2xl text-white text-center font-bold'>Follow Me</h1>
									<div className='flex space-x-4 justify-center'>
										{myLink.map((item) => {
											return (
												<span key={item.name} className='py-3'>
													<a href={item.link} className={item.style} target='_blank' rel='noopener noreferrer'>
														{item.icon}
													</a>
												</span>
											);
										})}
									</div>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</Layout>
	);
};

export default About;
