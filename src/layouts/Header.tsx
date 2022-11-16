import { useAppDispatch, useAppSelector } from 'app/hooks';
import { RootState } from 'app/store';
import { login } from 'redux/slices/walletSlice';

const Header = () => {
	const dispatch = useAppDispatch();
	const wallet = useAppSelector((state: RootState) => state.walletSlice.wallet);

	const handleConnectWallet = async () => {
		await dispatch(login());
	};

	return (
		<header className='flex items-center justify-between shadow-md h-16 px-4'>
			<img src='/images/logo.png' alt='Logo' className='w-32 lg:w-24' />
			<nav className='flex items-center'>
				<button className='secondary' onClick={handleConnectWallet}>
					Connect Wallet
				</button>
			</nav>
		</header>
	);
};

export default Header;
