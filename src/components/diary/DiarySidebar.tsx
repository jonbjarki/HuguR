export default function DiarySidebar() {
  return (
    <aside>
      <h1>Filter and Sort</h1>
      <h2>Sort by</h2>
      <ul>
        <li>
          <input type="radio" name="sortBy" id="dateDesc" />
          <label htmlFor="dateDesc">Date (newest to oldest)</label>
        </li>
        <li>
          <input type="radio" name="sortBy" id="dateAsc" />
          <label htmlFor="dateAsc">Date (oldest to newest)</label>
        </li>
      </ul>
      <h2>Contains emotion</h2>
      <ul>
        <li>
          <input type="checkbox" name="filterBy" id="anger" />
          <label htmlFor="anger">Anger</label>
        </li>
        <li>
          <input type="checkbox" name="filterBy" id="anxiety" />
          <label htmlFor="anxiety">Anxiety</label>
        </li>
        <li>
          <input type="checkbox" name="filterBy" id="sadness" />
          <label htmlFor="sadness">Sadness</label>
        </li>
        <li>
          <input type="checkbox" name="filterBy" id="frustration" />
          <label htmlFor="frustration">Frustration</label>
        </li>
        <li>
          <input type="checkbox" name="filterBy" id="fear" />
          <label htmlFor="fear">Fear</label>
        </li>
        <li>
          <input type="checkbox" name="filterBy" id="stress" />
          <label htmlFor="stress">Stress</label>
        </li>
        <li>
          <input type="checkbox" name="filterBy" id="other" />
          <label htmlFor="other">Other</label>
        </li>
      </ul>
    </aside>
  );
}
