import Image from "next/image";
import Meta from "../../components/Meta";
import Collections from "../../components/collections-wide/collection-content";
import FilterSortHeader from "../../components/collections-wide/collection-content/FilterSortHeader";
import Sidebar from "../../components/collections-wide/sidebar";
import CollectionHeader from "../../components/collections-wide/collection-content/CollectionHeader";

import { useRouter } from "next/router";

const cA = "0x8c6dEf540b83471664Edc6d5Cf75883986932674";

function CollectionPage() {

  const router = useRouter();
  const contract = router.query.collection;
  const headerData = {
    contractAddress: contract,
    collectionName: "Avatar Collection",
  };

  return (
    <>
      <Meta title="Collections Wide Sidebar" />
      {/* End page title */}

      <main className="mt-24">
        {/* Collections */}
        <section className="relative pt-16 pb-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <Image
              width={1519}
              height={773}
              priority
              src="/images/gradient_light.jpg"
              alt="gradient"
              className="h-full w-full object-cover"
            />
          </picture>
          <div className="px-6 xl:px-24">
            {/* Filters / Sorting */}
            <FilterSortHeader />
            {/* end filters / sorting */}
            <div className="lg:flex mt-6">
              {/* Sidebar */}
              <Sidebar />
              {/* end sidebar */}
              {/* Content */}
              <div className="lg:w-4/5 js-collections-content">
                <CollectionHeader contractAddress={contract}/>
                <Collections contractAddress={contract}/>
              </div>{" "}
              {/* end content */}
            </div>
          </div>
        </section>
        {/* end collections */}
      </main>
    </>
  );
};

export default CollectionPage;
