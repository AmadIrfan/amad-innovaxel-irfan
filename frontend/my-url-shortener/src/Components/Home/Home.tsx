import react from "react";
import useApi from "../../hooks/useApi";
import InputField from "../InputField";

function Home() {
	const apiUrl = import.meta.env.VITE_APP_BACKEND_API;
	const frontendApi = import.meta.env.VITE_APP_FRONTEND_API;

	const [url, setUrl] = react.useState("");
	const [shortUrl, setShortUrl] = react.useState("");
	const { post, loading, error } = useApi(apiUrl);

	const handleShorten = async () => {
		try {
			const data = await post("/shorten", { url });
			setShortUrl(`${frontendApi}/shorten/${data.shortCode}`);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
				<h1 className="text-2xl font-bold mb-4 text-center">
					🔗 URL Shortener
				</h1>

				<InputField
					value={url}
					onChange={(e) => setUrl(e.target.value)}
					placeholder="Enter long URL..."
				/>

				<div className="flex gap-2 mb-4">
					<button
						onClick={handleShorten}
						disabled={loading}
						className={`flex-1 py-2 rounded ${
							loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
						} text-white`}
					>
						{loading ? "Shortening..." : "Shorten"}
					</button>
				</div>

				{shortUrl && (
					<div className="text-center text-blue-600">
						✅ Short URL:{" "}
						<a
							href={shortUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="underline"
						>
							{shortUrl}
						</a>
					</div>
				)}

				{error && (
					<div className="mt-4 text-red-600 text-center text-sm">{error}</div>
				)}
			</div>
		</div>
	);
}

export default Home;
