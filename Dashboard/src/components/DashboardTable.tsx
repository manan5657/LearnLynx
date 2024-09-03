import { Column } from "react-table";
import TableHOC from "./TableHOC";

interface DataType {
  id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: string;
}

const columns: Column<DataType>[] = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

const DashboardTable = ({ data }: { data: DataType[] }) => {
  // Create a table component using TableHOC
  const TableComponent = TableHOC<DataType>(columns, data, "transaction-box", "Top Instructors");

  // Render the TableComponent
  return <TableComponent />;
};

export default DashboardTable;
