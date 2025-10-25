import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

export function AuthCard() {
	const authURL = "https://adoante.com/auth/login/"

	return (
		<Card className="md:w-1/2">
			<CardHeader>
				<CardTitle>Login to your account.</CardTitle>
				<CardDescription>
					Choose one of the providers below.
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				<Button onClick={() => window.location.href = authURL + "google"} variant="outline" className="">
					Login with Google
				</Button>
				<Button onClick={() => window.location.href = authURL + "github"} variant="outline" className="">
					Login with GitHub
				</Button>
				<Button onClick={() => window.location.href = authURL + "discord"} variant="outline" className="">
					Login with Discord
				</Button>
			</CardContent>
		</Card>
	)
}
