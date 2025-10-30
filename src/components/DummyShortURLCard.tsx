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
	const result = "1"

	return (
		<form className="border rounded-xl p-5 bg-zinc-950">
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
							disabled
						/>
					</Field>

					<Field orientation="horizontal">
						<Button
							className="cursor-pointer"
							type="submit"
							disabled
						>
							Shorten
						</Button>
					</Field>

					{result && (
						<p className="text-green-500 mt-2">
							Short URL created:{" "}
							<a
								href={`/${result}`}
								className="underline underline-offset-4 hover:text-white text-blue-400"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://adoante.com/{result}
							</a>
						</p>
					)}

				</FieldSet>
			</FieldGroup>
		</form>
	)
}

