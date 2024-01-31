'use client'
import Link from "next/link";
import {
	MdContacts,
	MdDiamond,
	MdPeopleAlt,
	MdEmail,
	MdFavorite,
	MdConstruction,
	MdCollections,
	MdLibraryAdd,
	MdOutlineTune,
	MdLogout,
	MdOutlineArrowForwardIos,
	MdOutlineArrowBackIosNew
} from "react-icons/md";
import { usePathname } from 'next/navigation'
import MenuItem from "./layout/menuItem";
import { useState } from "react";

const SideBar = () => {
	const pathname = usePathname()
	const [open, setOpen] = useState(true)
	return (
		<>
			<div className={"h-screen w-40 fixed flex lg:left-0 z-[19] " + `${open ? "left-0" : '-left-40'}`}>
				<div className="bg-[#121531] lg:h-[calc(100%-96px)] h-[calc(100%-88px)] w-full p-5 py-10 flex flex-col justify-between white overflow-auto ">
					<div className="flex flex-col justify-between">
						{/* Next.js doc => Nav Link */}
						<MenuItem icon={<MdContacts className="mr-2" />} title="Profile" active={false}>
							<button className={`flex items-center mb-4 py-1 px-2 rounded-lg w-full ${''}`}><MdDiamond className="mr-2" />Loot</button>
							<button className={`flex items-center mb-4 py-1 px-2 rounded-lg w-full ${''}`}><MdPeopleAlt className="mr-2" />Friends</button>
							<button className={`flex items-center mb-4 py-1 px-2 rounded-lg w-full ${''}`}><MdEmail className="mr-2" />Messages</button>
							<button className={`flex items-center mb-4 py-1 px-2 rounded-lg w-full ${``}`}><MdFavorite className="mr-2" />Favorites</button>
						</MenuItem>
						<MenuItem icon={<MdConstruction className="mr-2" />} title="Projects" href="/projects" active={pathname == '/projects'}>
							<button className={`flex items-center mb-4 py-1 px-2 rounded-lg w-full ${pathname=='/create-project' && "text-purple-600"}`}>
								<MdLibraryAdd className="mr-2" /><Link href={'/create-project'}>Create</Link>
							</button>
						</MenuItem>
						<MenuItem icon={<MdCollections className="mr-2" />} title="Collections" href="/collections" active={pathname=='/collections'}>
							<button className={`flex items-center mb-4 py-1 px-2 rounded-lg w-full ${''}`}><MdLibraryAdd className="mr-2" />Create</button>
						</MenuItem>
					</div>
					<div className="flex flex-col justify-between">
						<button className={`flex items-center mb-4 py-1 px-2 rounded-lg w-full ${''}`}><MdOutlineTune />Settings</button>
						{/* <button className="flex items-center mb-4 py-1 px-2 rounded-lg"><MdLogout />Logout</button> */}
					</div>
				</div>
				<button className="lg:hidden absolute -right-9 flex w-9 h-9 bg-[#ffffff25] justify-center items-center" onClick={() => setOpen(!open)}>
					{open ? <MdOutlineArrowBackIosNew /> : <MdOutlineArrowForwardIos />}
				</button>
			</div>
		</>
	)
}

export default SideBar