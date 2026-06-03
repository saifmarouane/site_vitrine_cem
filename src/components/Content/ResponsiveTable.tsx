type ResponsiveTableProps = {
  title?: string;
  headers: string[];
  rows: string[][];
  note?: string;
};

const ResponsiveTable = ({ title, headers, rows, note }: ResponsiveTableProps) => {
  return (
    <div className="my-10">
      {title && (
        <h2 className="mb-5 text-2xl font-bold text-black dark:text-white">
          {title}
        </h2>
      )}
      <div className="overflow-x-auto rounded-sm border border-body-color/10 dark:border-white/10">
        <table className="min-w-[720px] w-full border-collapse bg-white text-left text-sm dark:bg-gray-dark">
          <thead className="bg-primary/10 text-black dark:text-white">
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-5 py-4 font-bold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.join("-")}
                className="border-t border-body-color/10 dark:border-white/10"
              >
                {row.map((cell) => (
                  <td key={cell} className="px-5 py-4 font-medium text-body-color">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && (
        <p className="mt-4 rounded-sm bg-primary/10 p-4 text-sm font-medium leading-relaxed text-body-color">
          {note}
        </p>
      )}
    </div>
  );
};

export default ResponsiveTable;

