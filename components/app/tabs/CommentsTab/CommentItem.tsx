export default function CommentItem() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="rounded-full w-12 h-12 bg-gray-400" />
        <div className="flex flex-col justify-center">
          <span className="font-bold">Username</span>
          <span className="text-sm text-gray-500">January 2023</span>
        </div>
      </div>

      <div>
        {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
      </div>
    </div>
  )  
}