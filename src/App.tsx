import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "pages/Home";
import RegisterCompany from "pages/register/Company";
import Job from "pages/register/Job";
import Applicant from "pages/Applicant";
import NotFound from "pages/NotFound";
import { useAppDispatch } from "app/hooks";
import {
	getCompanyList,
	getIndustries,
	getCompanySizes,
} from "redux/slices/companySlice";
import { getSkills, getJobTypes, getAllJobs } from "redux/slices/jobSlice";
import BadgeCreator from "pages/BadgeCreator";

const App = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getCompanyList());
		dispatch(getIndustries());
		dispatch(getCompanySizes());
		dispatch(getSkills());
		dispatch(getJobTypes());
		dispatch(getAllJobs([""]));
	}, [dispatch]);
	return (
		<div className="App">
			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				pauseOnHover={false}
				pauseOnFocusLoss={false}
				rtl={false}
				draggable
			/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="register/company" element={<RegisterCompany />} />
				<Route path="register/job" element={<Job />} />
				<Route path="/job/:_id" element={<Applicant />} />
				<Route path="/badge-creator" element={<BadgeCreator />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;
