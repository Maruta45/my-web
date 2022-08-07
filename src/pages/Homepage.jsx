/** @format */
import { motion } from 'framer-motion';

import Layout from '../components/Layout';

import webPokemon from '../assets/images/web-pokemon.png';
import webLamiapp from '../assets/images/web-lamiapp.png';
import webMovie from '../assets/images/web-movie.png';
import webTodo from '../assets/images/web-todo.png';
import imageProfile from '../assets/images/rio.jpg';

const dataProject = [
	{
		id: 1,
		title: 'Moviely',
		tech: ['ReactJs', 'Tailwind', 'Axios', 'React-Router-Dom', 'Sweetalert2'],
		img: webMovie,
		description: 'This is a movies app that I created using api from TMDB API to get data from themoviedb.org',
		repository: 'https://github.com/alta-fe6-rio/my-movies-app-react',
		website: 'https://my-movies-app-react-alta-fe6-rio.vercel.app/',
	},
	{
		id: 2,
		title: 'Todo List',
		tech: ['ReactJs', 'Tailwind', 'Axios', 'React-Router-Dom', 'Lottie-React'],
		img: webTodo,
		description: 'This is a todos app that I created using api from Todoist API to get data from developer.todoist.com',
		repository: 'https://github.com/Maruta45/todo-app',
		website: 'https://todo-list-app-umber-eight.vercel.app//',
	},
	{
		id: 3,
		title: 'PokeNext',
		tech: ['NextJS', 'Tailwind', 'Axios'],
		img: webPokemon,
		description: 'This is a pokemon app that I created using api from PokeAPI to get data from pokeapi.co',
		repository: 'https://github.com/Maruta45/Pokemon-App',
		website: 'https://github.com/Maruta45/Pokemon-App',
	},
	{
		id: 4,
		title: 'Lamiapp',
		tech: ['ReactJs', 'Tailwind', 'Axios', 'React-Router-Dom', 'Lottie-React', 'MomentJs', 'React Leaflet', 'Material UI', 'Sweetalert2'],
		img: webLamiapp,
		description:
			'This is a final Project from Alterra Academy Bootcamp which is this application represent to Culture in Indonesia. The feature in this app is e-commerce, event-planning, and detail culture. division who contribute to this project are : Frontend, Backend, Quality Engineer.',
		repository: 'https://github.com/alta-capstone-groupproject2/frontend',
		website: 'https://lamiapp.netlify.app/',
	},
];

const academyHistory = [
	{
		id: 1,
		title: 'SMK MIGAS CEPU',
		image: 'https://upload.wikimedia.org/wikipedia/id/a/a4/SMK_Migas_Cepu.jpeg',
		when: '2017 - 2019',
		course: 'Electrical Engineer',
		description: 'This is a vocational high school that I attended in oil and gas industry, and i take a electrical engineering course',
		website: 'http://www.smkmigas.com/',
	},
	{
		id: 2,
		image: 'https://academy.alterra.id/wp-content/uploads/2022/06/Logo-Colour-Transparant-1.png',
		title: 'ALTERRA ACADEMY',
		when: 'May 2020 - July 2020',
		course: 'Frontend Engineer',
		description: 'I take a fast track bootcamp in Alterra Academy and i choose Frontend Engineer course because i like to designing website',
		website: 'https://academy.alterra.id/',
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
		},
	},
};

function Homepage() {
	return (
		<Layout>
			<motion.div variants={containerVariant} initial='hidden' animate='visible' className='w-full flex flex-col justify-center items-center my-20 space-y-20 cursor-default'>
				<div className='max-w-7xl flex flex-col items-center space-y-10 text-white px-4'>
					<img src={imageProfile} alt='Rio Dwi Syahputra' width={150} className='rounded-full' />
					<div>
						<p className='text-justify'>
							I am a junior web developer, 1 years self learning of web developer and I have a high interest in IT, especially Front-End Engineering. For more than 2 months at Alterra Academy, I have attended Javascript programming language
							training, ReactJs, & NextJS framework, HTML, CSS, Tailwind, and Bootstrap. I have also created projects like e-commerce, sound-fest, lami app, todo-app, movies-app, simple json server.
						</p>
					</div>
				</div>
				<div className='max-w-7xl flex flex-col justify-center items-center'>
					<h1 className='text-3xl font-bold text-white my-12'>Academy History</h1>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 px-4'>
						{academyHistory.map((item, index) => {
							return (
								<motion.div key={index} whileHover={{ boxShadow: '0px 0px 8px rgb(255,255,255)' }} className='flex flex-col items-center space-y-4 text-white p-4 border border-opacity-20 border-slate-300 hover:border-opacity-100'>
									<div className='flex flex-grow'>
										<img src={item.image} alt={item.title} width={300} height={150} className='bg-white' />
									</div>
									<div>
										<h1 className='text-center text-xl font-bold'>{item.title}</h1>
										<p className='text-end py-3'>{item.when}</p>
										<div className='border mb-6'>
											<h1 className='bg-slate-700 border-b text-center text-lg py-2'>Description</h1>
											<p className='p-3'>{item.description}</p>
										</div>
										<div className='flex justify-end'>
											<motion.a whileHover={{ textShadow: '0px 0px 8px rgb(255,255,255' }} href={item.website} target='_blank' rel='noopener noreferrer'>
												website
											</motion.a>
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
				<div className='flex flex-col justify-center items-center max-w-7xl'>
					<h1 className='text-3xl font-bold text-white my-12'>Project List</h1>
					<div className='max-w-7xl grid grid-cols-1 sm:grid-cols-2 gap-6 px-4'>
						{dataProject.map((item, index) => {
							return (
								<motion.div whileHover={{ boxShadow: '0px 0px 8px rgb(255,255,255)' }} className='flex flex-col space-y-4 text-white p-4 border border-opacity-20 border-slate-300 hover:border-opacity-100' key={index}>
									<img src={item.img} alt={item.title} />
									<div className='space-y-4 flex flex-grow flex-col'>
										<h3 className='text-center text-xl font-bold'>{item.title}</h3>
										<div className='border'>
											<div className='text-center text-lg py-2 bg-slate-700 border-b'>Tech Stack</div>
											<div className='grid grid-cols-3 gap-4 py-4'>
												{item.tech.map((tech, index) => {
													return (
														<motion.div whileHover={{ textShadow: '0px 0px 10px rgb(255,255,255)' }} key={index} className='text-center'>
															{tech}
														</motion.div>
													);
												})}
											</div>
										</div>
										<p className='text-justify'>{item.description}</p>
									</div>
									<div className='flex justify-between mt-auto'>
										<motion.a whileHover={{ textShadow: '0px 0px 8px rgb(255,255,255' }} href={item.repository} target={'_blank'} rel='noreferrer'>
											Github
										</motion.a>
										<motion.a whileHover={{ textShadow: '0px 0px 8px rgb(255,255,255' }} href={item.website} target={'_blank'} rel='noreferrer'>
											Website
										</motion.a>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</motion.div>
		</Layout>
	);
}

export default Homepage;
