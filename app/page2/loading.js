import { DisplayCardSkeleton } from "../ui/skeletons";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <DisplayCardSkeleton />
      <DisplayCardSkeleton />
      <DisplayCardSkeleton />
      <DisplayCardSkeleton />
    </div>
  );
}