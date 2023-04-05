import { supabase } from '@/lib/supabaseCLient';
import type { GetServerSideProps } from 'next';

interface Props {
	countries: [];
	res: any;
}

export default function Home({ countries, res }: Props) {
	console.log(res);
	return (
		<>
			<h1>Home</h1>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	let res = await supabase.from('countries').select();

	return {
		props: {
			res,
		},
	};
};
