import { Link } from "react-router-dom";
import MainLayout from "layouts/MainLayout";

const Home = () => {
	return (
		<MainLayout title="Home">
			<div className="container justify-center items-center">
				<div className="flex gap-4 wrap mt-12">
					<Link to="/register/company">
						<button className="primary">Register Company</button>
					</Link>
					<Link to="register/job">
						<button className="primary">Post a Job</button>
					</Link>
					<button className="primary">Apply for Jobs</button>
				</div>
			</div>
		</MainLayout>
	);
};

export default Home;
