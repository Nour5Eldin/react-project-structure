interface TableProps {
    columns: string[];
    data: Record<string, string | number>[];
    striped?: boolean;
}
export default function Table({
    columns, data, striped = false, }: TableProps) {
    return (

        <table className="w-full border-collapse">
            <thead>
                <tr className="bg-gray-900 text-white">
                    {columns.map((column) => (
                        <th className="border px-4 py-2 text-left" key={column}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr className={striped && rowIndex % 2 === 0 ? "bg-gray-100" : ""} key={rowIndex}>
                        {columns.map((column) => (
                            <td className="border px-4 py-2" key={column}>{row[column]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}