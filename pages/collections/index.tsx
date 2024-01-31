import Link from "next/link"
import { MdOutlineAdd } from "react-icons/md"
import PageContainer from "../../components/layout/PageContainer"

const collections = [
  {
    name: "CryptoPunks",
    thumbnailUrl: "https://img.reservoir.tools/images/v2/mainnet/hc%2BnPcLmWxs%2FDW99DlBQ42k40ZoyYV5jCIms5qHjwvsmkIapiDdMN%2BYI4A%2B4bPEPKTZo%2F1UtLn8vUzNUkVcp2je3%2FcdXa5xFHa6PJ04JsQtIfXjtOdqhG8becMN%2FyL6zs73y0mzl%2BkjkmdJYydtIYje9DvyLTMpUCxg1A1SM3AzzZjfJautoHpmkTpL7MsFu?width=250",
    url: "/collections/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"
  }
]

export default function CollectionsPage() {
  return (
    <PageContainer>
      <div className="flex w-full flex-wrap gap-10">
        {collections.map((project, index) => (
          // TODO - set `key` to project id
          <Link key={index} href={project.url}>
            <div key={project.name} className="flex flex-col items-center gap-4">
              <div
                className="w-[178px] h-[256px] rounded-lg"
                style={{ backgroundImage: `url("${project.thumbnailUrl}")` }}
              />
              <div className="font-bold text-lg">
                {project.name}
              </div>
            </div>
          </Link>
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