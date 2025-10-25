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

export function ShortenURLCard() {
	return (
		<form className="md:w-1/2 border rounded-xl p-5">
			<FieldGroup>
				<FieldSet>
					<FieldLegend>Shorten a URL</FieldLegend>
					<FieldDescription>
						Enter the full URL to shorten.
					</FieldDescription>
					<Field>
						<FieldLabel htmlFor="full">
							Full URL
						</FieldLabel>
						<Input
							id="full"
							type="url"
							placeholder="https://adolfogante.com"
							required
						/>
					</Field>
					<Field orientation="horizontal">
						<Button type="submit">Shorten</Button>
					</Field>
				</FieldSet>
			</FieldGroup>
		</form >
	)
}

