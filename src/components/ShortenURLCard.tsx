import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

interface ShortenResponse {
	id: number
	full: string
	short: string
	created_by: string
}

export function ShortenURLCard() {
	const [full, setFull] = useState("")
	const [loading, setLoading] = useState(false)
	const [result, setResult] = useState<string | null>(null)
	const [error, setError] = useState<string | null>(null)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)
		setError(null)
		setResult(null)

		try {
			const res = await fetch("/shorten", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ full }),
				credentials: "include", // send Supabase auth cookies
			})

			const data: ShortenResponse[] | { error: string } = await res.json()

			if (!res.ok) {
				const message = (data as { error: string }).error ?? "Request failed"
				throw new Error(message)
			}

			const inserted = data as ShortenResponse[]
			setResult(inserted[0]?.short ?? null)
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message)
			} else {
				setError("Unknown error")
			}
		} finally {
			setLoading(false)
		}
	}

	return (
		<form onSubmit={handleSubmit} className="border rounded-xl p-5 bg-zinc-950">
			<FieldGroup>
				<FieldSet>
					<FieldLegend>Shorten a URL</FieldLegend>
					<FieldDescription>
						Enter the full URL to shorten.
					</FieldDescription>

					<Field>
						<FieldLabel htmlFor="full">Full URL</FieldLabel>
						<Input
							id="full"
							type="url"
							placeholder="https://adolfogante.com"
							value={full}
							onChange={(e) => setFull(e.target.value)}
							required
						/>
					</Field>

					<Field orientation="horizontal">
						<Button type="submit" disabled={loading}>
							{loading ? "Shortening..." : "Shorten"}
						</Button>
					</Field>

					{result && (
						<p className="text-green-500 mt-2">
							Short URL created:{" "}
							<a
								href={`/${result}`}
								className="underline text-blue-400"
								target="_blank"
								rel="noopener noreferrer"
							>
								{window.location.origin}/{result}
							</a>
						</p>
					)}

					{error && (
						<p className="text-red-500 mt-2">
							Error: {error}
						</p>
					)}
				</FieldSet>
			</FieldGroup>
		</form>
	)
}

