import React from 'react';
import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Link from './components/login/Login';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login/*" element={<Link />} /> {/* USO DO ASTERISCO POR QUE AQUI VAMOS USAR OUTRAS ROTAS */}
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
