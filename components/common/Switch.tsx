import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default function Switch(props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <input
      type="checkbox"
      className="checked:bg-accent checked:focus:bg-accent checked:hover:bg-accent after:bg-jacarta-400 bg-jacarta-100 relative h-6 w-[2.625rem] cursor-pointer appearance-none rounded-full border-none after:absolute after:top-[0.1875rem] after:left-[0.1875rem] after:h-[1.125rem] after:w-[1.125rem] after:rounded-full after:transition-all checked:bg-none checked:after:left-[1.3125rem] checked:after:bg-white focus:ring-transparent focus:ring-offset-0"
      {...props}
    />
  )
}