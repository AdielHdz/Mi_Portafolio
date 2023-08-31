const TwoOptions = ({ listView, setListView }) => {
  return (
    <div className="relative h-10 font-itim grid grid-cols-2  items-center w-full max-w-little m-auto">
      <input
        type="checkbox"
        checked={listView}
        id="list"
        onChange={() => {
          setListView(true);
        }}
        className="hidden peer"
      />
      <label
        onClick={() => setListView(false)}
        className={`${
          !listView
            ? "font-semibold text-[#2E3840]"
            : " font-normal text-gray-500"
        } transform transition-all duration-200 `}
      >
        Vista gráfica
      </label>

      <label
        htmlFor="list"
        className={`${
          listView
            ? "font-semibold text-[#2E3840]"
            : " font-normal text-gray-500"
        } transform transition-all duration-200`}
      >
        Vista de lista
      </label>
      <div
        className={`absolute left-0 bottom-0 w-1/2 h-0 border border-rose-500 bg-rose-500  transform  transition-transform  duration-200  ${
          listView ? " translate-x-full" : ""
        } `}
      ></div>
    </div>
  );
};

export default TwoOptions;
