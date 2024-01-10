// import from react
import { Suspense } from "react";
// import components
import DisplayCard from "../ui/displayCard";
import { DisplayCardSkeleton } from "../ui/skeletons";


export const metadata = {
  title: 'Page 2',
}

export default function Page() {
  return (
    <main className="">
      <h2 className="text-center w-full mb-6">Page 2</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center p-6">
      <div className="mb-6">
        <DisplayCard
          title="Display Card"
          text="This is display card. It's a good way to show off your content."
          image="/images/company_logo.png"
        />  
      </div>
      <div className="mb-6">
        <DisplayCard
          title="Display Card"
          text="This is display card. It's a good way to show off your content."
          image="/images/company_logo.png"
        />  
      </div>
      <div className="mb-6">
        <DisplayCard
          title="Display Card"
          text="This is display card. It's a good way to show off your content."
          image="/images/company_logo.png"
        />  
      </div>
      <div className="mb-6">
        <DisplayCard
          title="Display Card"
          text="This is display card. It's a good way to show off your content."
          image="/images/company_logo.png"
        />  
      </div>
      </div>
    </main>
  );
}