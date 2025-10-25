import { useEffect, useState } from "react"
import { AuthCard } from "./components/AuthCard"
import { ShortenURLCard } from "./components/ShortenURLCard"
import { DataTable } from "./components/URLsTable"
import { ThemeProvider } from "@/components/theme-provider"
import type { URLData } from "./lib/url-data-columns"
import { columns } from "./lib/url-data-columns"

async function getData(): Promise<URLData[]> {
	// Fetch data from your API here.
	return [
		{
			created_at: "728ed52f",
			clicks: 100,
			full: "https://example.com",
			short: "exmpl",
		},
	]
}

export default function App() {
	const [data, setData] = useState<URLData[]>([])

	useEffect(() => {
		void getData().then(setData)
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
					<DataTable columns={columns} data={data} />
				</section>
			</main>
		</ThemeProvider>
	)
}

