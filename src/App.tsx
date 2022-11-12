import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from 'pages/Home';
import RegisterCompany from 'pages/register/Company';
import JobList from 'pages/JobList';
import NotFound from 'pages/NotFound';
import { useAppDispatch } from 'app/hooks';
import { getCompanyTypes, getCompanySizes } from 'redux/slices/companySlice';

const App = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getCompanyTypes());
		dispatch(getCompanySizes());
	}, [dispatch]);
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<JobList />} />
				<Route path='register/company' element={<RegisterCompany />} />
				<Route path='/jobs' element={<JobList />} />
				<Route path='/*' element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;
