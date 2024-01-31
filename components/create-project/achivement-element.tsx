/* eslint-disable @next/next/no-img-element */
import { FileUploader } from "react-drag-drop-files";
import { MdDelete } from "react-icons/md";
import Input from "../../components/common/Input";

const fileTypes = [
  "JPG",
  "PNG",
  "GIF",
  "SVG",
  "MP4",
  "WEBM",
  "MP3",
  "WAV",
  "OGG",
  "GLB",
  "GLTF",
];

export const AchievementElement = (i: any, data: { name: string; desc: string; url: string }, handleChangeAchIcon: { (file: any, i: any): Promise<void>; (arg0: any, arg1: any): any; }, achiNameChage: { (i: any, val: string): void; (arg0: any, arg1: string): void; }, achiDescChage: { (i: any, val: string): void; (arg0: any, arg1: string): void; }, delAchi: { (i: number): void; (arg0: any): void; }) => {
  return (
    <div className="flex items-center gap-6">
      <button className="dark:bg-jacarta-700 hover:bg-accent border-accent flex items-center justify-center rounded-lg border bg-white hover:border-transparent h-14 w-14">
        <img
          src={data.url==''?"/images/create-project/add_photo.svg": data.url}
          className="w-11 h-11"
          alt={"Add Photo"}
        />
        <div className="absolute cursor-pointer rounded opacity-0 w-12">
          <FileUploader
            handleChange={(file: any) => handleChangeAchIcon(file, i)}
            name={'achi_icon' + i}
            types={fileTypes}
            classes="m-auto w-12"
            maxSize={100}
            minSize={0}
          />
        </div>
      </button>
      <div className="w-[200px] z-20">
        <Input placeholder="Name" value={data.name} onChange={(e) => achiNameChage(i, e.target.value)} />
      </div>
      <div className="flex-1">
        <Input placeholder="Description" value={data.desc} onChange={(e) => achiDescChage(i, e.target.value)} />
      </div>
      <button className="text-xl" onClick={() => delAchi(i)}><MdDelete /></button>
    </div>
  )
}