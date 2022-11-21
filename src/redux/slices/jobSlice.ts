import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { JobProps } from "redux/types/jobProps";
import { _getSkills, _getJobTypes, _getAllJobs } from "utils/job";

const initialState: JobProps = {
	skill: [],
	type: [],
	jobs: [],
	badges: [""],
	filterByWallet: false,
};

export const getSkills = createAsyncThunk("jobSlice/getSkills", async () => {
	const res = await _getSkills();
	return res;
});

export const getJobTypes = createAsyncThunk("jobSlice/getJobTypes", async () => {
	const res = await _getJobTypes();
	return res;
});

export const getAllJobs = createAsyncThunk(
	"jobSlice/getAllJobs",
	async (a: any, b: any) => {
		const res = await _getAllJobs(a);
		return res;
	}
);

export const JobSlice = createSlice({
	name: "jobSlice",
	initialState,
	reducers: {
		setBadges: (state, action: PayloadAction<any>) => {
			state.badges = action.payload;
		},
		setFilterByWallet: (state, action: PayloadAction<any>) => {
			state.filterByWallet = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getSkills.fulfilled, (state, action: PayloadAction<any>) => {
			state.skill = action.payload;
		});
		builder.addCase(getJobTypes.fulfilled, (state, action: PayloadAction<any>) => {
			state.type = action.payload;
		});
		builder.addCase(getAllJobs.fulfilled, (state, action: PayloadAction<any>) => {
			state.jobs = action.payload;
		});
	},
});

export const { setBadges, setFilterByWallet } = JobSlice.actions;

export default JobSlice.reducer;
