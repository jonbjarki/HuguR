export default function DropdownSelector() {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">
        Choose any..
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black"
      >
        <li>
          <input type="checkbox" name="anxiety" id="anxiety" value="Anxiety" />
          <label htmlFor="anxiety">Anxiety</label>
        </li>
        <li>
          <input type="checkbox" name="anger" id="anger" value="Anger" />
          <label htmlFor="anger">Anger</label>
        </li>
        <li>
          <input type="checkbox" name="fear" id="fear" value="Fear" />
          <label htmlFor="fear">Fear</label>
        </li>
        <li>
          <input type="checkbox" name="sadness" id="sadness" value="Sadness" />
          <label htmlFor="sadness">Sadness</label>
        </li>
      </ul>
    </div>
  );
}
