import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default function Input(props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <input
      type="text"
      className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-[32px] py-3 px-3 hover:ring-2 dark:text-white"
      {...props}
    />
  )

}