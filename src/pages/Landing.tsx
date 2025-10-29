import { Button } from "@/components/ui/button"
import { FeatureCard } from "@/components/FeatureCard"
import { DummyShortenURLCard } from "@/components/DummyShortURLCard"
import { DataTable } from "@/components/URLsTable"
import { columns, type URLData } from "../lib/url-data-columns"

export default function Landing() {
	const dummyData: URLData[] = [
		{
			created_at: "2025/10/29",
			full: "https://adolfoante.com/",
			short: "1",
			clicks: 19
		},
		{
			created_at: "2025/10/28",
			full: "https://adolfoante.com/blog",
			short: "9",
			clicks: 42
		},
		{
			created_at: "2025/10/27",
			full: "https://adolfoante.com/contact",
			short: "A",
			clicks: 7
		},
		{
			created_at: "2025/10/26",
			full: "https://adolfoante.com/work",
			short: "B",
			clicks: 15
		},
		{
			created_at: "2025/10/25",
			full: "https://adolfoante.com/contact",
			short: "C",
			clicks: 28
		}
	]

	return (
		<main
			className="flex flex-col justify-center min-h-screen max-w-7xl mx-auto px-5 md:px-10 pb-10 md:pb-50 space-y-10 md:space-y-50"
		>

			<section className="flex flex-col md:flex-row items-center justify-between rounded-xl gap-10">
				<div className="space-y-5 md:w-1/2 text-left">
					<h1 className="md:text-5xl text-3xl font-semibold">
						Short Links.
					</h1>
					<h1 className="md:text-5xl text-3xl font-semibold">
						Simple Analytics.
					</h1>
					<p className="font-light">Create, manage, and track short links.</p>
					<span className="flex flex-row gap-5 items-center mt-10 md:py-10">
						<Button
							className="cursor-pointer"
							onClick={() => { window.location.href = "/login" }}
						>
							Get Started
						</Button>
						<p className="italic">It’s free!</p>
					</span>
				</div>

				<div className="flex flex-col gap-5 md:w-2/3 w-full">
					<DummyShortenURLCard />
					<DataTable columns={columns} data={dummyData} />
				</div>
			</section>

			{/* Feature Cards */}
			<section className="space-y-5">
				<div className="grid md:grid-cols-2 grid-cols-1 place-items-center gap-5">
					<FeatureCard
						title="Pricing"
						description="Free for everyone!"
						content={
							<p>
								The Adoante URL Shortener is completely free to use while it’s running on the
								<a href="https://supabase.com/pricing" className="hover:font-semibold hover:text-white text-blue-300"> Supabase free tier</a>.
							</p>
						}
					/>
					<FeatureCard
						title="Short Links"
						description="Create short links like adoante.com/1"
						content={
							<p>
								Short links make long or complex URLs easier to share, remember, and manage across platforms.
							</p>
						}
					/>
					<FeatureCard
						title="Click Tracking"
						description="See how many times your links were visited."
						content={
							<p>
								Click tracking helps you understand how your links are performing by showing how often they’re clicked and when.
							</p>
						}
					/>
					<FeatureCard
						title="Easy Login"
						description="Login with your favorite OAuth Provider."
						content={
							<p>
								OAuth login lets you sign in quickly using accounts you already trust, like Google or GitHub, without creating new passwords.
							</p>
						}
					/>
				</div>
			</section>

			{/*
			<section className="md:space-y-20 space-y-10">
				<div className="flex flex-col md:flex-row md:items-center justify-between w-full space-y-5">
					<div className="space-y-5 md:w-1/2 w-full">
						<h3 className="md:text-3xl text-xl font-semibold">1. Login to get started.</h3>
					</div>

					<AuthCard />
				</div>

				<div className="flex flex-col md:flex-row md:items-center justify-between w-full space-y-5">
					<div className="space-y-5 md:w-1/2 w-full">
						<h3 className="md:text-3xl text-xl font-semibold">2. Paste, click and copy.</h3>
					</div>
					<div className="md:w-1/2">
						<DummyShortenURLCard />
					</div>
				</div>

				<div className="flex flex-col md:flex-row md:items-center justify-between w-full space-y-5">
					<div className="space-y-5 md:w-1/2 w-full">
						<h3 className="md:text-3xl text-xl font-semibold">3. Manage and track your links.</h3>
					</div>

					<DataTable columns={columns} data={dummyData} />
				</div>
			</section>
			*/}

			<section className="flex flex-col mx-auto md:py-20 py-10 md:px-25 px-5 border bg-background/20 rounded-2xl backdrop-blur-sm">
				<div className="md:space-y-10 space-y-6 flex flex-col">
					<h4 className="md:text-4xl text-xl font-semibold">
						Turn long, messy URLs into short, shareable links.
					</h4>
					<p className="md:text-xl font-light">
						Track every click to understand how your links perform.
					</p>
					<span className="flex flex-row gap-5 items-center">
						<Button
							className="cursor-pointer"
							onClick={() => { window.location.href = "/login" }}
						>
							Get Started
						</Button>
						<p className="italic">It’s free!</p>
					</span>
				</div>
			</section>

		</main>
	)
}
