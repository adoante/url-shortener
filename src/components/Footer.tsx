export default function Footer() {
	return (
		<footer className="md:px-5 md:py-20 py-10 space-y-5 flex flex-col items-center md:bg-zinc-950 text-center">
			<p className="text-sm text-gray-400">
				2025 <span className="font-semibold text-white">Adoante</span> — Built by{" "}
				<a
					href="https://adoante.com/1"
					className="hover:font-semibold hover:text-white text-blue-300"
				>
					Adolfo Gante
				</a>
			</p>

			<ul className="flex flex-row flex-wrap justify-center gap-2 text-sm [&>li]:font-light [&>p]:font-light">
				<li>
					<a
						href="/privacy"
						className="hover:font-semibold hover:text-white text-blue-300"
					>
						Privacy Policy
					</a>
				</li>
				<p>|</p>
				<li>
					<a
						href="/terms"
						className="hover:font-semibold hover:text-white text-blue-300"
					>
						Terms of Service
					</a>
				</li>
				<p>|</p>
				<li>
					<a
						href="https://adolfogante.com/contact"
						className="hover:font-semibold hover:text-white text-blue-300"
					>
						Contact
					</a>
				</li>
			</ul>
		</footer>
	)
}

