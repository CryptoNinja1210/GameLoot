import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Price_history = ({ classes }) => {
	return (
		<div className="relative mb-24 w-full">
			{/* <!-- Price History --> */}
			<div className="tab-pane fade">
				<div className={classes}>
					{/* <!-- Period / Stats --> */}
					<div className="mb-10 flex flex-wrap items-center">
						<select className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 mr-8 min-w-[12rem] rounded-lg py-3.5 text-sm dark:text-white">
							<option defaultValue="7-days">Last 7 Days</option>
							<option defaultValue="14-days">Last 14 Days</option>
							<option defaultValue="30-days">Last 30 Days</option>
							<option defaultValue="60-days">Last 60 Days</option>
							<option defaultValue="90-days">Last 90 Days</option>
							<option value="last-year">Last Year</option>
							<option value="all-time">All Time</option>
						</select>

						<div className="py-2">
							<span className="mr-4 inline-block align-middle">
								<span className="block text-sm font-bold dark:text-white">90 Day Avg. Price:</span>
								<span className="text-green block text-sm font-bold">Ξ7.0633</span>
							</span>

							<span className="inline-block align-middle">
								<span className="block text-sm font-bold dark:text-white">90 Day Volume:</span>
								<span className="text-green block text-sm font-bold">Ξ24,085.6957</span>
							</span>
						</div>
					</div>

					{/* <!-- Chart --> */}
					<div className="chart-container relative h-80 w-full">
						<Bar
							data={{
								labels: ['January', 'February', 'March', 'April', 'May', 'June'],
								datasets: [
									{
										type: 'line',
										label: 'Avg. price',
										backgroundColor: '#10B981',
										borderColor: '#10B981',
										data: [54.73, 64, 53, 96, 130, 100, 102.88],
									},
									{
										type: 'bar',
										label: 'Sales',
										backgroundColor: '#E7E8EC',
										data: [25, 20, 40, 130, 75, 48, 12],
									},
								],
							}}
							options={{
								maintainAspectRatio: false,
								responsive: true,
								interaction: {
									intersect: false,
									mode: 'index',
								},
								scales: {
									x: {
										grid: {
											display: false,
										},
									},
									y: {
										ticks: {
											stepSize: 50,
										},
									},
								},
								plugins: {
									legend: { display: false },
									decimation: {
										enabled: true,
									},
									tooltip: {
										usePointStyle: true,
										position: 'nearest',
										backgroundColor: '#131740',
										titleAlign: 'center',
										bodyAlign: 'center',
										footerAlign: 'center',
										padding: 12,
										displayColors: false,
										yAlign: 'bottom',
									},
								},
								animation: false,
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Price_history;
