import axios from "axios";

export async function getEventBriteEventList() {
	return await axios.get(
		`${process.env.REACT_APP_EVENTBRITE_BASE_API}/organizations/${process.env.REACT_APP_EVENTBRITE_ORG_ID}/events/`,
		{
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_EVENTBRITE_PERSONAL_AUTH_TOKEN}`,
			},
		}
	);
}
