import Footer from 'components/Footer';
import Newsletter from 'components/Newsletter';
import ResourceHighlight from 'components/ResourceHighlight';
import ResourceList from 'components/ResourceList';
import Layout from 'components/Layout';
import { useEffect } from 'react';

function Home({ resources }) {
	return (
		<>
			<Layout>
				<ResourceHighlight resources={resources.slice(0, 2)} />
				<Newsletter />
				<ResourceList resources={resources.slice(2)} />
				<Footer />
			</Layout>
		</>
	);
}

// Is called every time you visit the page
// function is executed on the server
export async function getServerSideProps() {
	const resData = await fetch('http://localhost:3001/api/resources');
	const data = await resData.json();

	// console.log(data);

	return {
		props: {
			resources: data,
		},
	};
}

// Is called at the build time, and it's called only once
// export async function getStaticProps() {
// 	const resData = await fetch('http://localhost:3000/api/resources');
// 	const data = await resData.json();

// 	return {
// 		props: {
// 			resources: data,
// 		},
// 	};
// }

export default Home;
