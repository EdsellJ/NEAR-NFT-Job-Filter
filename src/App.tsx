import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import RegisterCompany from "pages/register/Company";
import Job from "pages/register/Job";
import JobList from "pages/JobList";
import NotFound from "pages/NotFound";
import { useAppDispatch } from "app/hooks";
import {
	getCompanyList,
	getIndustries,
	getCompanySizes,
} from "redux/slices/companySlice";

const App = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getCompanyList());
		dispatch(getIndustries());
		dispatch(getCompanySizes());
	}, [dispatch]);
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="register/company" element={<RegisterCompany />} />
				<Route path="register/job" element={<Job />} />
				<Route path="/jobs" element={<JobList />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;
