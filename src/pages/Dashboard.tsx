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

	const data: URLData[] = await res.json()
	return data
}

{/*
const dp: URLData[] =
	[
		{
			"created_at": "10/25/2025",
			"full": "https://duckduckgo.com/",
			"short": "https://adoante.com/2",
			"clicks": 2
		},
		{
			"created_at": "10/25/2025",
			"full": "https://supabase.com/",
			"short": "https://adoante.com/3",
			"clicks": 1
		},
		{
			"created_at": "10/28/2025",
			"full": "https://myalmacoffee.com/products/agua-fria",
			"short": "https://adoante.com/7",
			"clicks": 0
		},
		{
			"created_at": "10/29/2025",
			"full": "https://appraise-benchmark.com/",
			"short": "https://adoante.com/8",
			"clicks": 0
		},
		{
			"created_at": "10/23/2025",
			"full": "https://www.adolfogante.com/",
			"short": "https://adoante.com/1",
			"clicks": 20
		},
		{
			"created_at": "10/29/2025",
			"full": "https://www.adolfogante.com/blog",
			"short": "https://adoante.com/9",
			"clicks": 1
		},
		{
			"created_at": "10/29/2025",
			"full": "https://www.adolfogante.com/contact",
			"short": "https://adoante.com/A",
			"clicks": 1
		},
		{
			"created_at": "10/29/2025",
			"full": "https://www.adolfogante.com/work",
			"short": "https://adoante.com/B",
			"clicks": 1
		},
		{
			"created_at": "10/29/2025",
			"full": "https://www.adolfogante.com/about",
			"short": "https://adoante.com/C",
			"clicks": 1
		}
	]
*/}

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
			{!loading && <div className="w-full"><DataTable columns={columns} data={data} /></div>}
			{error && <p className="text-red-400">Error: {error}</p>}
		</main>
	)
}
