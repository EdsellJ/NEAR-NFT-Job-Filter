import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CompanyProps } from "redux/types/companyProps";
import { _getCompanyList, _getIndustries, _getCompanySizes } from "utils/company";

const initialState: CompanyProps = {
	companyList: [{}],
	industry: [{}],
	size: [{}],
};

export const getCompanyList = createAsyncThunk("companySlice/getCompanyList", async () => {
		const res = await _getCompanyList();
		return res;
	}
);

export const getIndustries = createAsyncThunk("companySlice/getIndustries", async () => {
	const res = await _getIndustries();
	return res;
});

export const getCompanySizes = createAsyncThunk(
	"companySlice/getCompanySizes",
	async () => {
		const res = await _getCompanySizes();
		return res;
	}
);

export const CompanySlice = createSlice({
	name: "companySlice",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getIndustries.fulfilled, (state, action: PayloadAction<any>) => {
			state.industry = action.payload;
		});
		builder.addCase(getCompanySizes.fulfilled, (state, action: PayloadAction<any>) => {
			state.size = action.payload;
		});
		builder.addCase(getCompanyList.fulfilled, (state, action: PayloadAction<any>) => {
			state.companyList = action.payload;
		});
	},
});

export default CompanySlice.reducer;
