import { ShortenURLCard } from "@/components/ShortenURLCard"
import { DataTable } from "@/components/URLsTable"
import { columns } from "../lib/url-data-columns"
import type { URLData } from "../lib/url-data-columns"
import { useEffect, useState } from "react"

async function getData(): Promise<URLData[]> {
	const res = await fetch("/user/urls", {
		method: "GET",
		credentials: "include", // sends Supabase SSR cookies
		headers: {
			Accept: "application/json",
		},
	})

	if (!res.ok) {
		throw new Error(`Failed to fetch URLs: ${res.statusText}`)
	}

	return res.json()
}

export default function Dashboard() {
	const [data, setData] = useState<URLData[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		void (async () => {
			try {
				const urls = await getData()
				setData(urls)
			} catch (err) {
				if (err instanceof Error) setError(err.message)
				else setError("Unknown error while fetching URLs")
				console.error(err)
			} finally {
				setLoading(false)
			}
		})()
	}, [])

	return (
		<main className="flex flex-col items-center md:min-h-screen justify-center md:py-20 py-10 px-5 space-y-20 mx-auto max-w-6xl">
			<div className="w-full">
				<ShortenURLCard />
			</div>

			{loading && <p className="text-gray-400">Loading URLs...</p>}
			{!loading && <DataTable columns={columns} data={data} />}
			{error && <p className="text-red-400">Error: {error}</p>}
		</main>
	)
}

