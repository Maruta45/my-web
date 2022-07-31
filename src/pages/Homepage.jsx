/** @format */
import { motion } from 'framer-motion';

import Layout from '../components/Layout';
import imageProfile from '../assets/images/rio.jpg';

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
			<motion.div variants={containerVariant} initial='hidden' animate='visible' className='w-full flex justify-center my-20'>
				<div className='max-w-3xl flex flex-col items-center space-y-10 text-white'>
					<img src={imageProfile} alt='Rio Dwi Syahputra' width={150} className='rounded-full' />
					<div>
						<p>
							I am a junior web developer, 1 years self learning of web developer and I have a high interest in IT, especially Front-End Engineering. For more than 2 months at Alterra Academy, I have attended Javascript programming language
							training, ReactJs, & NextJS framework, HTML, CSS, Tailwind, and Bootstrap. I have also created projects like e-commerce, sound-fest, lami app, todo-app, movies-app, simple json server.
						</p>
					</div>
				</div>
			</motion.div>
		</Layout>
	);
}

export default Homepage;
