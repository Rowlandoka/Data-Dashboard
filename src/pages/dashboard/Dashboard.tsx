import React from 'react';
import { Box } from '@mui/material';
import DataRibbon from '@/components/Dashbaord/DataRibbon';
import TransactionsPerDay from '@/components/Dashbaord/TransactionsPerDay';
import TransactionBottomRow from '@/components/Dashbaord/TransactionBottomRow';
import Grid from '@mui/material/Grid';

const Dashboard = () => {
	return (
		<Box>
			<Grid container gap={4} marginTop={2}>
				<DataRibbon />
				<TransactionsPerDay />
			</Grid>
			<TransactionBottomRow />
		</Box>
	);
};
export default Dashboard;
