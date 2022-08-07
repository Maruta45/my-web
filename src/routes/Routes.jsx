/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';

import Homepage from '../pages/Homepage';
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
