import { MdOutlineAdd } from "react-icons/md"
import PageContainer from "../../components/layout/PageContainer"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useAllGames } from "../../hooks/useGames"

export default function ProjectsPage() {
  // TODO(2023-01-08) Improve useGames parameter interface.
  const { isLoading, data } = useAllGames();
  console.log(isLoading, data)
  return (
    <PageContainer>
      <div className="flex w-full flex-wrap gap-10">
        {!isLoading && data.map((project) => (
          <div key={project.gameName} className="flex flex-col items-center gap-4 w-[178px]">
            <div
              className="w-full h-[256px] rounded-lg"
              style={{ backgroundImage: `url("${project.thumbnailUrl}")` }}
            />
            <div className="font-bold text-lg">
              {project.gameName}
            </div>
          </div>
        ))}

        <Link key="create-new-project" href="/create-project">
          <div className="flex flex-col items-center justify-center w-[178px] h-[256px] rounded-lg bg-[#13173f] border border-1 border-[#6942ff] cursor-pointer hover:bg-[#1c1f42]">
            <MdOutlineAdd className="text-4xl" />
          </div>
        </Link>
      </div>
    </PageContainer >
  )
}