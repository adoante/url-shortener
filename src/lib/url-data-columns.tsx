import type { ColumnDef } from "@tanstack/react-table"

export interface URLData {
	created_at: string
	full: string
	short: string
	clicks: number
}

export const columns: ColumnDef<URLData>[] = [
	{
		accessorKey: "created_at",
		header: "Created At",
		cell: ({ row }) => {
			const date = new Date(row.getValue("created_at"))
			return date.toLocaleDateString()
		}
	},
	{
		accessorKey: "full",
		header: "Full URL",
		cell: ({ row }) => {
			const url = row.getValue("full") as string
			return (
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 hover:underline flex items-center gap-1"
				>
					{url}
				</a>
			)
		},
	},
	{
		accessorKey: "short",
		header: "Short URL",
		cell: ({ row }) => {
			const short = row.getValue("short") as string
			// Adjust this base URL to match your deployed domain:
			const shortLink = `https://adoante.com/${short}`
			return (
				<a
					href={shortLink}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 hover:underline flex items-center gap-1"
				>
					{shortLink}
				</a>
			)
		},
	},
	{
		accessorKey: "clicks",
		header: "Clicks",
	},
]

