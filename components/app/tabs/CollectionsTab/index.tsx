import CollectionCard from "./CollectionCard";

export default function CollectionsTab() {
  return (
    <div className="flex gap-4">
      <CollectionCard collectionName="Name" description="short description" />
      <CollectionCard collectionName="Name" description="short description" />
    </div>
  )
}