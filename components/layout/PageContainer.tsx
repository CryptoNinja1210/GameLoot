import { PropsWithChildren } from "react";

export default function PageContainer(props: PropsWithChildren) {
  return (
    <div className="mt-[88px] lg:mt-[96px] px-6 xl:px-24">
      {props.children}
    </div>
  )
}