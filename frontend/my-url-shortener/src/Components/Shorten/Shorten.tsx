import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";

const Shorten = () => {
	const { shortCode } = useParams<{ shortCode: string }>();
	const navigate = useNavigate();
	const apiUrl = import.meta.env.VITE_APP_BACKEND_API;
	const frontendApi = import.meta.env.VITE_APP_FRONTEND_API;
	const { get, loading, error } = useApi(apiUrl);

	// Handle redirection if a code is passed in the URL
	useEffect(() => {
		const fetchAndRedirect = async () => {
			if (shortCode) {
				try {
					console.log(apiUrl);

					const data = await get(`/shorten/${shortCode}`);
					if (data.url) {
						window.location.href = data.url; // Redirect to the original URL
					} else {
						let url = frontendApi + "/shorten/" + shortCode;
						navigate(`/404?url=${encodeURIComponent(url)}`); // Redirect to the 404 page if the code is invalid
					}
				} catch (err) {
					let url = frontendApi + "/shorten/" + shortCode;
					navigate(`/404?url=${encodeURIComponent(url)}`); // Redirect to the 404 page if the code is invalid
				}
			}
		};
		fetchAndRedirect();
	}, []);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			{loading ? (
				<h1 className="text-2xl font-bold mb-4 text-center">
					🔗 Redirecting...
				</h1>
			) : error ? (
				<div className="mt-4 text-red-600 text-center">{error}</div>
			) : null}
		</div>
	);
};

export default Shorten;
