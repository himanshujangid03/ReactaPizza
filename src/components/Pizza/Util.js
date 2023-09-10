import Dropdown from "./Dropdown/Dropdown";

function Util(props) {
  return (
    <>
      <div className="utils">
        <div className="search-input__div">
          <label htmlFor="input">Search for pizzas - </label>
          <input
            type="text"
            placeholder="Search Order #"
            id="input"
            onChange={(e) => props.setQuery(e.target.value)}
          />
        </div>
        <div className="sort-data__div">
          <Dropdown />
        </div>
      </div>
    </>
  );
}
export default Util;
