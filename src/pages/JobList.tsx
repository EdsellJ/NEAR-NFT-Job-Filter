import MainLayout from 'layouts/MainLayout';
import JobListItem from 'components/JobListItem';
const { jobs } = require('config/mockup.json');

const JobList = () => {
	return (
		<MainLayout title='Job List' className='bg-background pb-4'>
			<div className='container flex flex-col'>
				<p className='text-gradient mt-20 mx-auto text-8xl font-semibold text-center md:text-5xl xs:text-3xl'>
					Your future is NEAR
				</p>
				<button className='mx-auto my-8 primary'>Post a job</button>
				<div className='grid gap-4'>
					{jobs.map((job: Record<any, any>, index: number) => (
						<JobListItem job={job} key={`job-${index}`} />
					))}
				</div>
			</div>
		</MainLayout>
	);
};

export default JobList;
