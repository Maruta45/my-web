/** @format */

import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className='w-full h-screen'>
			<div className='w-full h-full overflow-auto bg-slate-800'>
				<Navbar />
				{children}
			</div>
		</div>
	);
};

export default Layout;
