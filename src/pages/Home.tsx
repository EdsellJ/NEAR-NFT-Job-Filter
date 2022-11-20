import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "layouts/MainLayout";
import JobList from "components/JobList";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import { getAllJobs, setFilterByWallet } from "redux/slices/jobSlice";
import '../styles/mixin/_title.css';

const Home = () => {
	const filterByWallet = useAppSelector(
		(state: RootState) => state.jobSlice.filterByWallet
	);
	const [checked, setChecked] = useState(false);
	const dispatch = useAppDispatch();
	const badges = useAppSelector((state: RootState) => state.jobSlice.badges);
	useEffect(() => {
		if (checked) {
			dispatch(setFilterByWallet(true));
		} else {
			dispatch(setFilterByWallet(false));
		}
	}, [checked]); //eslint-disable-line
	useEffect(() => {
		if (filterByWallet) {
			dispatch(getAllJobs(badges));
		} else {
			dispatch(getAllJobs([""]));
		}
	}, [filterByWallet]); //eslint-disable-line
	return (
		<MainLayout title="Home">
			<div className="container justify-center items-center py-4">
				<div>
					<div style={{ height: '10vh' }}></div>
					<h1 className="title" style={{}}>Your future is NEAR</h1>
					<div style={{ height: '5vh' }}></div>
				</div>
				<div className="container justify-center items-center">
					<button className="primary" style={{}}>
						<Link to="/register/job" className="font-bold">
							Post a job
						</Link>
					</button>
				</div>
				<div style={{ height: '5vh' }}></div>
				<div className="container">
					<label
						htmlFor="filter-option"
						className="flex items-center gap-2 mb-4 text-lg font-bold"
					>
						<input
							type="checkbox"
							id="filter-option"
							className="w-4 h-4"
							checked={filterByWallet}
							onChange={() => setChecked((prev) => !prev)}
						/>
						Filter by wallet
					</label>
				</div>
				<div className="container" style={{backgroundColor: '#f1f1fd', marginBottom:'2%'}}>
					<JobList />
				</div>
			</div>
		</MainLayout>
	);
};

export default Home;
