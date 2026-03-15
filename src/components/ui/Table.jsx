import { useState } from "react";

export default function Table({ columns, data }) {
  const [sortKey, setSortKey] = useState(null);
  const [ascending, setAscending] = useState(true);

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) return 0;
    const valA = a[sortKey];
    const valB = b[sortKey];
    if (valA > valB) return ascending ? 1 : -1;
    if (valA < valB) return ascending ? -1 : 1;
    return 0;
  });

  const handleSort = (key) => {
    if (key === sortKey) setAscending(!ascending);
    else {
      setSortKey(key);
      setAscending(true);
    }
  };

  return (
    <table className="w-full border border-gray-200 rounded overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              className="p-2 text-left cursor-pointer"
              onClick={() => handleSort(col.key)}
            >
              {col.label} {sortKey === col.key ? (ascending ? "↑" : "↓") : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row) => (
          <tr key={row.id} className="hover:bg-gray-50">
            {columns.map((col) => (
              <td key={col.key} className="p-2">
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
