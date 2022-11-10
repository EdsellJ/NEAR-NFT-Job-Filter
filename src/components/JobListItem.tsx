import React from 'react';

interface JobProps {
	title?: string;
	companyName?: string;
	location?: string;
	date?: string;
}

interface Props {
	job: JobProps;
}

const JobListItem = (props: Props) => {
	const { title, companyName, location, date } = props.job;
	return (
		<div className='flex gap-4 rounded-md p-4 bg-white cursor-pointer hover:shadow-md'>
			<img
				src='/images/company_logo.png'
				alt={companyName}
				className='w-20 h-20'
			/>
			<div className='flex flex-col'>
				<span className='text-lg font-bold'>{title}</span>
				<span className='text-base text-[#3F495A]'>{companyName}</span>
				<span className='mt-auto text-sm text-[#2F394A]'>
					{location} · {date}
				</span>
			</div>
			<div className='text-gradient ml-auto my-auto font-bold sm:hidden'>Read more</div>
		</div>
	);
};

export default JobListItem;
