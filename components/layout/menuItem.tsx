import Link from "next/link"
import { PropsWithChildren, useState } from "react"

interface MenuItemProps extends PropsWithChildren {
	icon: React.ReactNode,
	title: string,
	href?: string,
	active: boolean
}

export default function MenuItem(props: MenuItemProps) {
	const [open, setOpen] = useState(true)
	return (
		<>
			<Link className={`flex items-center mb-4 py-1 px-2 rounded-lg ${props.active ? 'text-purple-600' : ''}`} href={props.href || ""}>
				{props.icon}{props.title}
			</Link>
			{open &&
				<div className="ml-4">
					{props.children}
				</div>
			}
		</>
	)
}