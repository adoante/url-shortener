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

export function DummyShortenURLCard() {
	const [full, setFull] = useState("")
	const [result, setResult] = useState<string | null>(null)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setResult("Login to get started!")
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
						<Button type="submit">
							Shorten
						</Button>
					</Field>

					{result && (
						<p className="text-green-500 mt-2">
							{result}
						</p>
					)}

				</FieldSet>
			</FieldGroup>
		</form>
	)
}

