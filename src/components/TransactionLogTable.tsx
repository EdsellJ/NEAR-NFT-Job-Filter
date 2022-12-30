import transactionLogs from "json/transactionLogs.json";

export default function TransactionLogTable() {
	return (
		<div className="container mt-8">
			<div className="logs mx-auto  w-3/4">
				<div className="transaction flex items-center space-x-2 mb-4">
					<h6>Transactions log </h6>{" "}
					<img src="/images/info_icon.png" alt="info" className="w-3" />
				</div>
				<table className="w-full">
					<thead className="py-4 bg-deep-blue text-white border border-black">
						{transactionLogs.head.map((item) => (
							<th key={item.key} className="border py-3 border-black">
								{item.text}
							</th>
						))}
					</thead>
					<tbody>
						{transactionLogs.body.map((item, index) => {
							return (
								<tr key={index}>
									{item.map((rowItem) => (
										<td className="border py-2 pl-6" key={rowItem}>
											{rowItem}
										</td>
									))}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
