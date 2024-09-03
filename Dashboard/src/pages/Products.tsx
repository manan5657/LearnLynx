// import { ReactElement, useCallback, useState } from "react";
// import AdminSidebar from "../components/AdminSidebar";
// import TableHOC from "../components/TableHOC";
// import { Column } from "react-table";
// import { Link } from "react-router-dom";
// import { FaPlus } from "react-icons/fa";
// import { useLocation } from "react-router-dom";
// import axios from "axios";

// interface DataType {
//   photo: ReactElement;
//   name: string;
//   price: number;
//   discounted_Price: number;
//   action: ReactElement;
// }

// const columns: Column<DataType>[] = [
//   {
//     Header: "Photo",
//     accessor: "photo",
//   },
//   {
//     Header: "Name",
//     accessor: "name",
//   },
//   {
//     Header: "Discounted Price",
//     accessor: "discounted_Price",
//   },
//   {
//     Header: "Price",
//     accessor: "price",
//   },
//   {
//     Header: "Action",
//     accessor: "action",
//   },
// ];

// const img =
//   "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

// const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";

// const arr: DataType[] = [
//   {
//     photo: <img src={img} alt="Shoes" />,
//     name: "Puma Shoes Air Jordan Cook Nigga 2023",
//     price: 690,
//     discounted_Price: 620, // Adjusted discounted price
//     action: <Link to="/admin/product/sajknaskd">Manage</Link>,
//   },
//   {
//     photo: <img src={img2} alt="Shoes" />,
//     name: "Macbook",
//     price: 232223,
//     discounted_Price: 210000, // Adjusted discounted price
//     action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
//   },
//   {
//     photo: <img src={img} alt="Shoes" />,
//     name: "Puma Shoes Air Jordan Cook Nigga 2023",
//     price: 690,
//     discounted_Price: 620, // Adjusted discounted price
//     action: <Link to="/admin/product/sajknaskd">Manage</Link>,
//   },
//   {
//     photo: <img src={img2} alt="Shoes" />,
//     name: "Macbook",
//     price: 232223,
//     discounted_Price: 210000, // Adjusted discounted price
//     action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
//   },
//   {
//     photo: <img src={img} alt="Shoes" />,
//     name: "Puma Shoes Air Jordan Cook Nigga 2023",
//     price: 690,
//     discounted_Price: 620, // Adjusted discounted price
//     action: <Link to="/admin/product/sajknaskd">Manage</Link>,
//   },
//   {
//     photo: <img src={img2} alt="Shoes" />,
//     name: "Macbook",
//     price: 232223,
//     discounted_Price: 210000, // Adjusted discounted price
//     action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
//   },
//   {
//     photo: <img src={img2} alt="Shoes" />,
//     name: "Macbook",
//     price: 232223,
//     discounted_Price: 210000, // Adjusted discounted price
//     action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
//   },
// ];

// const Products = () => {
//   const location = useLocation();

//   const queryParams = new URLSearchParams(location.search);
//   const auth = queryParams.get("auth");
//   const [data] = useState<DataType[]>(arr);

//   const Table = useCallback(
//     TableHOC<DataType>(columns, data, "dashboard-product-box", "Courses", true),
//     []
//   );

//   return (
//     <div className="admin-container">
//       <AdminSidebar />
//       <main>{Table()}</main>
//       <Link
//         to={`/admin/product/new?auth=${auth}`}
//         className="create-product-btn"
//       >
//         <FaPlus />
//       </Link>
//     </div>
//   );
// };

// export default Products;

import { ReactElement, useCallback, useState, useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import axios from "axios";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  discounted_Price: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Discounted Price",
    accessor: "discounted_Price",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const auth = queryParams.get("auth");

  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/admin/dashCourses/?auth=${auth}`,
          { withCredentials: true }
        );

        const courses = response.data.map((course: any) => ({
          photo: <img src={course.img} alt={course.title} />,
          name: course.title,
          price: course.price,
          discounted_Price: course.discountPrice, // Make sure this matches your backend response
          action: <Link to={`/admin/product/${course._id}`}>Manage</Link>,
        }));

        setData(courses);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch courses");
        setLoading(false);
      }
    };

    fetchCourses();
  }, [auth]);

  // Correct use of TableHOC
  const TableComponent = useCallback(
    TableHOC<DataType>(columns, data, "dashboard-product-box", "Courses", true),
    [data]
  );

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          // Render the TableComponent correctly
          <TableComponent />
        )}
      </main>
      <Link
        to={`/admin/product/new?auth=${auth}`}
        className="create-product-btn"
      >
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;

