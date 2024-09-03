import { ReactElement, useState, useEffect, useCallback } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";
import { useLocation } from "react-router-dom";

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
];

const Customers = () => {
  const [data, setData] = useState<DataType[]>([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const auth = queryParams.get("auth");

  // Fetch the data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/mystudents?auth=${auth}`);
        const result = await response.json();
        console.log(result);

        // Assuming result is an array of objects with name, email, and avatar properties
        const transformedData = result.map((student: any) => ({
          avatar: (
            <img
              style={{
                borderRadius: "50%",
              }}
              src={"data:image/png;base64,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"} // Ensure the API returns a valid avatar URL
              alt={student.name}
            />
          ),
          name: student.username,
          email: student.email,
        }));

        setData(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Students",
      true
    ),
    [data]
  );

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{Table()}</main>
    </div>
  );
};

export default Customers;
