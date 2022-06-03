import type {LoaderFunction} from "@remix-run/node";
import {Link, useLoaderData} from "@remix-run/react";
import * as first from "./first-blog.mdx";

function postFormModule(mod: any) {
	return {
		slug: mod.filename.replace(/\.mdx?$/, ""),
		...mod.attributes.meta,
	};
}

export const loader: LoaderFunction = () => {
	return [postFormModule(first)];
};

export default function BlogIndex() {
	const posts = useLoaderData();

	return (
		<div>
			<h1 className='text-3xl font-bold underline'>Hello world!</h1>
			<ul>
				{posts.map((post: any) => (
					<li key={post.slug}>
						<Link to={post.slug}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
