import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function NavBar() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [avatar, setAvatar] = useState("")

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const res = await fetch("/auth/me", {
					method: "GET",
					credentials: "include", // important for Supabase SSR cookies
				})
				setIsLoggedIn(res.ok)

				const data = await res.json()
				const avatar_url = data["user_metadata"]["avatar_url"]
				setAvatar(avatar_url)
			} catch {
				setIsLoggedIn(false)
			}
		}

		void checkAuth()
	}, [])

	const handleClick = () => {
		window.location.href = isLoggedIn ? "/dashboard" : "/login"
	}

	return (
		<nav className="flex flex-row justify-between items-center mx-auto py-10 md:py-20 md:px-10 px-5 max-w-7xl">
			<a href="/" className="font-bold text-2xl">
				adoante
			</a>

			<span className="flex flex-row gap-5 items-center">
				<Button className="cursor-pointer" onClick={handleClick}>
					{isLoggedIn ? "Dashboard" : "Login"}
				</Button>

				{isLoggedIn && (
					<Avatar className="">
						<AvatarImage src={avatar} />
						<AvatarFallback>U</AvatarFallback>
					</Avatar>
				)}
			</span>
		</nav>
	)
}
