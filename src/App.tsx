import { useEffect, useState } from "react"
import { AuthCard } from "./components/AuthCard"
import { ShortenURLCard } from "./components/ShortenURLCard"
import { DataTable } from "./components/URLsTable"
import { ThemeProvider } from "@/components/theme-provider"
import type { URLData } from "./lib/url-data-columns"
import { columns } from "./lib/url-data-columns"

// Fetch user's URLs from your API (typed)
async function getData(): Promise<URLData[]> {
	const res = await fetch("/user/urls", {
		method: "GET",
		credentials: "include", // sends Supabase SSR cookies
		headers: {
			"Accept": "application/json",
		},
	})

	if (!res.ok) {
		throw new Error(`Failed to fetch URLs: ${res.statusText}`)
	}

	const data: URLData[] = await res.json()
	return data
}

export default function App() {
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
			} finally {
				setLoading(false)
			}
		})()
	}, [])

	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<main className="flex flex-col min-h-screen items-center">
				<section className="flex-1 mx-auto max-w-4xl w-full px-5 space-y-10 py-10 border">
					<header className="text-center md:text-3xl text-xl font-bold">
						Adolfo Gante{`'`}s URL Shortener
					</header>

					<hr className=""></hr>
					<h3 className="md:text-2xl font-semibold text-lg">Login</h3>
					<AuthCard />

					<hr className=""></hr>
					<h3 className="md:text-2xl font-semibold text-lg">Create a short URL</h3>
					<ShortenURLCard />

					<hr className=""></hr>
					<h3 className="md:text-2xl font-semibold text-lg">Your URLs</h3>

					{loading && <p className="text-gray-400">Loading URLs...</p>}
					{error && <p className="text-red-500">Error: {error}</p>}

					{!loading && !error && <DataTable columns={columns} data={data} />}
				</section>
			</main>
		</ThemeProvider>
	)
}

