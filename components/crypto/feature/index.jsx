import SingleFeatuer from "./SingleFeatuer";

const index = () => {
  return (
    <section className="pt-20 pb-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <SingleFeatuer />
        </div>
      </div>
    </section>
  );
};

export default index;
