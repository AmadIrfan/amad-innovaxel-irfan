import { ApiResponse } from "../types/response";
import { useState } from "react";

const useApi = (baseUrl: string) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const post = async (endpoint: string, body: any) => {
		setLoading(true);
		setError(null);
		try {
			const res = await fetch(`${baseUrl}${endpoint}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			});

			if (!res.ok) {
				throw new Error("Failed to fetch data");
			}

			const data: ApiResponse = await res.json();
			return data;
		} catch (err: any) {
			setError(err.message || "An error occurred");
			throw err;
		} finally {
			setLoading(false);
		}
	};

	const get = async (endpoint: string) => {
		setLoading(true);
		setError(null);
		try {
			const res = await fetch(`${baseUrl}${endpoint}`);
			if (!res.ok) {
				throw new Error("Failed to fetch data");
			}

			const data: ApiResponse = await res.json();
			return data;
		} catch (err: any) {
			setError(err.message || "An error occurred");
			throw err;
		} finally {
			setLoading(false);
		}
	};

	return { post, get, loading, error };
};

export default useApi;
