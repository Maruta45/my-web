/** @format */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='border-b border-slate-600'>
			<div className='flex px-8 py-4 text-white'>
				<motion.div initial={{ x: '100vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
					<motion.p whileHover={{ textShadow: '0px 0px 10px rgb(255,255,255)' }}>
						<Link to='/'>Rio</Link>
					</motion.p>
				</motion.div>
				<motion.ul initial={{ x: '-100vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className='ml-auto flex space-x-4'>
					<motion.li whileHover={{ textShadow: '0px 0px 10px rgb(255,255,255)' }}>
						<Link to='/about'>About</Link>
					</motion.li>
					<motion.li whileHover={{ textShadow: '0px 0px 10px rgb(255,255,255)' }}>
						<Link to='/contact'>Contact</Link>
					</motion.li>
				</motion.ul>
			</div>
		</nav>
	);
};

export default Navbar;
