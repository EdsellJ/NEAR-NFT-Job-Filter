// import { useState } from "react";
//
import { useQuery } from "@tanstack/react-query";
import Logo from "components/Logo";
import NFTHeroBanner from "components/NFTHeroBanner";
// import TransactionLogTable from "components/TransactionLogTable";
import NFTLayout from "layouts/NFTLayout";
import { getEventBriteEventList } from "utils/getEvents";
import { formatDate } from "utils/getTimeDifference";
// import Modal from "components/Modal";

export default function BadgeCreator() {
	const { data, status } = useQuery(["list-event"], getEventBriteEventList);
	console.log("status", status, "data", data);
	// const [modal, setModal] = useState(false);
	return (
		<>
			{/* <Modal modal={modal} modalHandler={() => setModal(false)}>
				<h4 className="text-center flex mx-auto">I am a modal</h4>
			</Modal> */}
			<NFTLayout title="Mint NFT's">
				<NFTHeroBanner />
				{/* <TransactionLogTable toggleModal={() => setModal(true)} /> */}
				<div className="my-8 upcoming-events text-deep-blue mx-auto flex flex-col justify-center  container">
					<h2>Upcoming Events</h2>
					<p>Earn badges at upcoming events!</p>
					<div className="span w-1/6 my-4">
						<Logo noLink />
					</div>
					{status === "error" ? (
						<p>Unable to fetch events from Eventbrite</p>
					) : status === "loading" ? (
						<p>fetching upcoming events from eventbrite...</p>
					) : (
						<ul className="">
							{data.data.events.map((briteEvent: any) => {
								const eventDate = formatDate(briteEvent.start.utc);
								return (
									<li key={briteEvent.id} className="">
										<img
											src={briteEvent.logo.original.url}
											height={`${briteEvent.logo.crop_mask.height}px`}
											width={`${briteEvent.logo.crop_mask.width}px`}
											alt={briteEvent.name.text}
											className="my-6"
										/>
										<h2 className="font-bold my-4">{briteEvent.name.text}</h2>
										<p>{briteEvent.description.text}</p>
										<div className="bottom-info my-8 flex justify-between">
											<a href={briteEvent.url} className="text-red-500 underline">
												Vist Event ({briteEvent.is_free ? "free" : "paid"})
											</a>
											<div className="date">{eventDate}</div>
										</div>
									</li>
								);
							})}
						</ul>
					)}
				</div>
			</NFTLayout>
		</>
	);
}
