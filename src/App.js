import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Blog from'./views/Blog.js';
import FilmsList from './views/FilmsList';
import React, { useEffect, useState } from "react";

function App(){
	return (
		<Router>
			<Routes>
				<Route path="/" element={<FilmsList/>}/>
				<Route path="/blog" element={<Blog/>}/>
			</Routes>
			{/* Switch fue reemplazado por Routes */}
		</Router>
	);
}

export default App;