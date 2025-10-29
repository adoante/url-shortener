import { ThemeProvider } from "@/components/theme-provider"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Dashboard from "./pages/Dashboard"
import PrivacyPolicy from "./pages/Privacy"
import TermsOfService from "./pages/TermsOfService"

export default function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

			<div className="fixed inset-0 w-full h-full bg-white dark:bg-zinc-950 overflow-hidden">
				{/* Binary Pattern */}
				<svg
					className="absolute inset-0 w-full h-full"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<pattern
							id="binary-pattern"
							x="0"
							y="0"
							width="40"
							height="40"
							patternUnits="userSpaceOnUse"
						>
							<text x="0" y="10" fontSize="10" fill="#09090b">10110101</text>
							<text x="20" y="20" fontSize="10" fill="#18181b">01001010</text>
							<text x="0" y="30" fontSize="10" fill="#27272a">11010010</text>
							<text x="20" y="40" fontSize="10" fill="#3f3f46">00101101</text>
							<text x="0" y="50" fontSize="10" fill="#52525b">10110101</text>
							<text x="20" y="60" fontSize="10" fill="#71717a">01001010</text>
						</pattern>
					</defs>

					<rect width="100%" height="100%" fill="url(#binary-pattern)" />
				</svg>

				{/* Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-br from-white via-white/0 to-white dark:from-zinc-950 dark:via-zinc-950/0 dark:to-zinc-950" />
			</div>
			<main className="relative z-10">
				<NavBar />
				<Router>
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="/login" element={<Login />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/privacy" element={<PrivacyPolicy />} />
						<Route path="/terms" element={<TermsOfService />} />
					</Routes>
				</Router>
				<Footer />
			</main>
		</ThemeProvider >
	)
}

