import { useState,FormEvent } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { useLocation } from "react-router-dom";
import axios from "axios";

const NewProduct = () => {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [img, setImg] = useState<string>();
  const [discountPrice, setDisCountPrice] = useState<number>();
  const location=useLocation();
  const queryParams = new URLSearchParams(location.search);
  const auth = queryParams.get("auth");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Construct the payload
    const newCourse = {
      title,
      price,
      discountPrice,
      img,
    };

    try {
      // Make the POST request with the query parameter `auth`
      const response = await axios.post(
        `http://localhost:3000/api/admin/create?auth=${auth}`, // Include the auth query parameter
        newCourse
      );
      console.log(response.data);
      alert("Course created successfully");
    } catch (error) {
      console.error("Error while creating course", error);
      alert("Error creating course");
    }
  };


  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="product-management">
        <article>
          <form onSubmit={handleSubmit}>
            <h2>New Course</h2>
            <div>
              <label>Name</label>
              <input
                required
                type="text"
                placeholder="Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input
                required
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Discount Price</label>
              <input
                required
                type="number"
                placeholder="DiscountPrice"
                value={discountPrice}
                onChange={(e) => setDisCountPrice(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Image</label>
              <input required type="text" onChange={(e)=>setImg(e.target.value)} />
            </div>
            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  );

};


export default NewProduct;
