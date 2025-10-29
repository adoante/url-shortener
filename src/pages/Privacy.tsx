export default function PrivacyPolicy() {
	return (
		<main className="flex flex-col max-w-5xl mx-auto py-20 px-6 space-y-8 text-left leading-relaxed">
			<h1 className="text-4xl font-bold mb-4">Adoante URL Shortener Privacy Policy</h1>
			<p className="text-sm text-gray-400">Effective Date: October 28, 2025</p>

			<section className="space-y-4">
				<h2 className="text-2xl font-semibold">Introduction</h2>
				<p>
					Welcome to <strong>Adoante Short</strong>. This Privacy Policy explains how we collect, use,
					and protect information when you use our URL shortening service at{" "}
					<a href="https://adoante.com" className="text-blue-400 hover:underline">
						https://adoante.com
					</a>.
				</p>
			</section>

			<section className="space-y-4">
				<h2 className="text-2xl font-semibold">Information We Collect</h2>
				<p>
					We collect account information via OAuth (name, email, profile picture), link data
					(original URLs, shortened URLs, click counts), and basic usage statistics.
				</p>
			</section>

			<section className="space-y-4">
				<h2 className="text-2xl font-semibold">How We Use Your Information</h2>
				<p>
					We use data to provide, maintain, and improve the service, authenticate users, and prevent
					abuse. We do not sell or rent your data.
				</p>
			</section>

			<section className="space-y-4">
				<h2 className="text-2xl font-semibold">Data Sharing</h2>
				<p>
					We share limited data only with trusted providers (OAuth, analytics, hosting) necessary to
					operate the service.
				</p>
			</section>

			<section className="space-y-4">
				<h2 className="text-2xl font-semibold">Data Retention</h2>
				<p>
					Data is retained while your account is active. You may request deletion via{" "}
					<a href="mailto:adolfogante@gmail.com" className="text-blue-400 hover:underline">
						adolfogante@gmail.com
					</a>.
				</p>
			</section>

			<section className="space-y-4">
				<h2 className="text-2xl font-semibold">Cookies</h2>
				<p>
					We use secure session cookies for authentication. No tracking or advertising cookies are
					used.
				</p>
			</section>

			<section className="space-y-4">
				<h2 className="text-2xl font-semibold">Security</h2>
				<p>
					We use HTTPS, secure storage, and OAuth-based authentication. However, no system is 100%
					secure.
				</p>
			</section>

			<section className="space-y-4">
				<h2 className="text-2xl font-semibold">Your Rights</h2>
				<p>
					You may request access, correction, or deletion of your data by contacting us.
				</p>
			</section>

			<section className="space-y-4">
				<h2 className="text-2xl font-semibold">Changes</h2>
				<p>
					We may update this policy periodically with a new effective date.
				</p>
			</section>

			<section className="space-y-4">
				<h2 className="text-2xl font-semibold">Contact</h2>
				<p>
					For any privacy concerns, contact{" "}
					<a href="mailto:adolfogante@gmail.com" className="text-blue-400 hover:underline">
						adolfogante@gmail.com
					</a>.
				</p>
			</section>
		</main>
	)
}
