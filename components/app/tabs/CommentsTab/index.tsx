import CommentItem from "./CommentItem";

export default function CommentsTab() {
  return (
    <div className="max-w-[750px] mt-4 mx-auto rounded-md bg-[#3b3b47] p-8 flex flex-col">
      <div className="text-lg mb-2">
        Comment
      </div>
      <textarea rows={5} className="w-full bg-black" placeholder="Type your comment here"></textarea>

      <div className="w-full bg-gray-400 h-[2px] my-4" />

      <div className="flex flex-col gap-14">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
    </div>
  )
}