export default function Card({ data }) {
  return (
    <>
      {data
        ? data.map((item) => {
            return (
              <div
                className="  w-60  mt-2 p-2 relative font-comic "
                key={item.id}
              >
                <div className=" h-56 bg-opacity-30 backdrop-blur-sm rounded-t-md bg-blend-soft-light ">
                  <img
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    alt="img"
                    className="h-full w-full rounded-t-md"
                  />
                </div>
                <div className="">
                  <a href={item.id}>
                    <p className=" bg-white bg-opacity-20 backdrop-blur-md px-2 font-bold text-center text-black">
                      {item.name}
                    </p>
                    <div className="flex items-center justify-between py-3 px-2 text-white bg-white bg-opacity-20 backdrop-blur-md rounded-b-md font-semibold ">
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </a>
                </div>
              </div>
            );
          })
        : ""}
    </>
  );
}
