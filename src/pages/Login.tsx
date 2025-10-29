import { AuthCard } from "@/components/AuthCard";

export default function Login() {
	return (
		<main className="flex flex-col items-center justify-center md:py-50 py-15 px-5 md:min-h-screen">
			<section className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-10 md:gap-20 bg-background/20 rounded-2xl border py-10 px-5 md:p-10 backdrop-blur-sm">
				<div className="space-y-5 text-left w-full md:w-1/2">
					<h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
						Login
					</h1>
					<p className="text-muted-foreground font-light">
						More OAuth providers coming soon.
					</p>
				</div>
				<AuthCard />
			</section>
		</main>
	)
}
