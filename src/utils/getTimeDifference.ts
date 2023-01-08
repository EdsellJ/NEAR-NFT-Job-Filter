export function getTimeDifference(endTime: string, startTime: string) {
	const endTimeDate: any = new Date(endTime);
	const startTimeDate: any = new Date(startTime);
	const timeDiff = endTimeDate - startTimeDate;
	const seconds = Math.floor(timeDiff / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);

	return { days, hours, minutes, seconds };
}

export function formatDate(eventDate: string) {
	const formattedEventDate = new Date(eventDate);
	return formattedEventDate.toLocaleDateString("en-US", {
		// timeZone: "UTC",
		timeZoneName: "short",
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		timeStyle: "full",
	});
}
