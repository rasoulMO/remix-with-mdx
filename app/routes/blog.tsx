import {Outlet} from "@remix-run/react";

export default function Blog() {
	return (
		<div className='flex justify-center'>
			<div className='prose lg:prose-xl py-10'>
				<Outlet />
			</div>
		</div>
	);
}
