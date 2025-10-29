import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

interface FeatureCardProps {
	title: string
	description: string
	content: React.ReactNode
}

export function FeatureCard({ title, description, content }: FeatureCardProps) {
	return (
		<Card className="w-full h-full">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				{content}
			</CardContent>
		</Card>
	)
}

