import { useLocation } from "react-router-dom";

export default function NotFount() {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const url = decodeURIComponent(params.get("url") || "");

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-2xl font-bold mb-4 text-center">
				Your requested route was not found... 🔗
			</h1>
			{url && (
				<a href={url} className="text-blue-500 underline">
					🔗 URL: {url}
				</a>
			)}
		</div>
	);
}
