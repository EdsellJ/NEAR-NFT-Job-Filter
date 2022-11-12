import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CompanyProps } from 'redux/types/companyProps';
import { _getCompanyTypes, _getCompanySizes } from 'utils/company';

const initialState: CompanyProps = {
	type: [{}],
	size: [{}],
};

export const getCompanyTypes = createAsyncThunk(
	'companySlice/getCompanyTypes',
	async () => {
		const res = await _getCompanyTypes();
		return res;
	}
);

export const getCompanySizes = createAsyncThunk(
	'companySlice/getCompanySizes',
	async () => {
		const res = await _getCompanySizes();
		return res;
	}
);

export const CompanySlice = createSlice({
	name: 'companySlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			getCompanyTypes.fulfilled,
			(state, action: PayloadAction<any>) => {
				state.type = action.payload;
			}
		);
		builder.addCase(
			getCompanySizes.fulfilled,
			(state, action: PayloadAction<any>) => {
				state.size = action.payload;
			}
		);
	},
});

export default CompanySlice.reducer;
