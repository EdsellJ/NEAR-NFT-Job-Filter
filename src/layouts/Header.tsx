import { useAppDispatch, useAppSelector } from 'app/hooks';
import { RootState } from 'app/store';
import { login } from 'redux/slices/walletSlice';

const Header = () => {
	const dispatch = useAppDispatch();
	const wallet = useAppSelector((state: RootState) => state.walletSlice.wallet);

	const handleConnectWallet = async () => {
		dispatch(await login());
	};

	console.log(wallet)

	return (
		<header className='shadow-md px-10'>
			<nav className='flex items-center justify-end h-20'>
				<button
					className='primary base-transition'
					onClick={handleConnectWallet}
				>
					Connect Wallet
				</button>
			</nav>
		</header>
	);
};

export default Header;
