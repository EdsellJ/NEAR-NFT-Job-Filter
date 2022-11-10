import { Routes, Route } from 'react-router-dom';
// import Home from 'pages/Home';
import JobList from 'pages/JobList';
import NotFound from 'pages/NotFound';

const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<JobList />} />
				<Route path='/jobs' element={<JobList />} />
				<Route path='/*' element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;
