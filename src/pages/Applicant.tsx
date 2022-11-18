import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "layouts/MainLayout";
import { useAppSelector } from "app/hooks";
import { RootState } from "app/store";

type Props = {};

const Applicant = (props: Props) => {
	const [job, setJob] = useState({});
	const _id = useParams();
	const jobs = useAppSelector((state: RootState) => state.jobSlice.jobs);

  console.log(jobs)
	useEffect(() => {
		for (let _job of jobs) {
			if (_job._id === _id) {
				setJob(_job);
				return;
			}
		}
	}, [_id, jobs]);

	console.log(job);
	return (
		<MainLayout title="APPLY FOR JOB">
			<div className="container">Hello</div>
		</MainLayout>
	);
};

export default Applicant;
