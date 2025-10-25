import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

interface SupabaseUser {
	id: string
	email?: string
	app_metadata?: {
		provider?: string
	}
}

export function AuthCard() {
	const [user, setUser] = useState<SupabaseUser | null>(null)
	const [loading, setLoading] = useState(true)
	const authURL = "https://adoante.com/auth/login/"

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await fetch("/auth/me", { credentials: "include" })
				if (!res.ok) throw new Error("Failed to fetch user")
				const data: SupabaseUser | null = await res.json()
				setUser(data)
			} catch {
				setUser(null)
			} finally {
				setLoading(false)
			}
		}
		void fetchUser()
	}, [])

	if (loading) {
		return (
			<Card className="md:w-1/2 text-center">
				<CardHeader>
					<CardTitle>Loading...</CardTitle>
				</CardHeader>
			</Card>
		)
	}

	if (user) {
		return (
			<Card className="md:w-1/2">
				<CardHeader>
					<CardTitle>Welcome back!</CardTitle>
					<CardDescription>Your account details</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-3">
					<p><strong>Email:</strong> {user.email}</p>
					<p><strong>Provider:</strong> {user.app_metadata?.provider ?? "Unknown"}</p>
					<Button
						variant="outline"
						onClick={() => {
							void fetch("/auth/logout", {
								method: "POST",
								credentials: "include",
							}).then(() => window.location.reload())
						}}
					>
						Logout
					</Button>
				</CardContent>
			</Card>
		)
	}

	return (
		<Card className="md:w-1/2">
			<CardHeader>
				<CardTitle>Login to your account</CardTitle>
				<CardDescription>Choose one of the providers below.</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				<Button
					onClick={() => (window.location.href = authURL + "google")}
					variant="outline"
				>
					Login with Google
				</Button>
				<Button
					onClick={() => (window.location.href = authURL + "github")}
					variant="outline"
				>
					Login with GitHub
				</Button>
				<Button
					onClick={() => (window.location.href = authURL + "discord")}
					variant="outline"
				>
					Login with Discord
				</Button>
			</CardContent>
		</Card>
	)
}

