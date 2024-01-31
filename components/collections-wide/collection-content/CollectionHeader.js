import { useTotalCount, useContract, useMetadata } from "@thirdweb-dev/react";

const CollectionHeader = ({contractAddress}) => {

    const { contract } = useContract(contractAddress);
    console.log(contractAddress);
    const { data: totalCount, isLoading: isLoadingCount} = useTotalCount(contract);
    const { data: metadata, isLoading: isLoadingMetadata} = useMetadata(contract);

    return (
    <div className="mb-8 pb-px">
        {isLoadingMetadata ? ( <></> ) : (
        <h1 className="pt-3 mb-2 font-display text-2xl font-medium text-jacarta-700 dark:text-white">
          {metadata.name}
        </h1>
        )}

      {isLoadingCount ? (
        <p className="dark:text-jacarta-400 font-medium text-2xs"> 0 items</p>
      ) : (
        <p className="dark:text-jacarta-400 font-medium text-2xs">
          {totalCount !== undefined ?( Number(totalCount._hex)) : <>0</>} items
        </p>
      )}
    </div>
  );
};

export default CollectionHeader;
