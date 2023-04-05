import { useEffect } from 'react';

interface Props {
	children?: React.ReactNode;
}

function Layout({ children }: Props) {
	return (
		<div className="px-3">
			{/* <nav>Nav</nav> */}
			<main className="">{children}</main>
			{/* <footer>Footer</footer> */}
		</div>
	);
}

export default Layout;
