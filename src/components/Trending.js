const Trending = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="text-2xl ">Trending</h3>
      <div
        className="card bg-base-100 image-full w-[289px]
       h-[320px] shadow-xl"
      >
        <figure>
          <img src="image.png" alt="Shoes" />
        </figure>
        <div className="card-body flex gap-4">
          <button className="btn btn-primary flex justify-start ">
            Technology{" "}
          </button>

          <p className="text-lg">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};
export default Trending;
