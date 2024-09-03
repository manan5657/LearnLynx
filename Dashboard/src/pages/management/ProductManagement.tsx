import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useParams } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import axios from "axios";

const ProductManagement = () => {
  const { id } = useParams<{ id: string }>();

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [discountedPrice, setDiscountedPrice] = useState<number>(0);
  const [photo, setPhoto] = useState<string>("");

  const [nameUpdate, setNameUpdate] = useState<string>("");
  const [priceUpdate, setPriceUpdate] = useState<number>(0);
  const [discountedPriceUpdate, setDiscountedPriceUpdate] = useState<number>(0);
  const [photoUpdate, setPhotoUpdate] = useState<string>("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/admin/course/${id}`
        );
        const product = response.data;
        console.log(product);

        // Assuming the product data format is similar to the following
        setName(product.title);
        setPrice(product.price);
        setDiscountedPrice(product.discountPrice);
        setPhoto(product.img);

        // Set update state
        setNameUpdate(product.title);
        setPriceUpdate(product.price);
        setDiscountedPriceUpdate(product.discountPrice);
        setPhotoUpdate(product.img);
      } catch (error) {
        console.error("Failed to fetch product", error);
      }
    };

    fetchProduct();
  }, [id]);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post(
        `http://localhost:3000/api/admin/course/${id}/edit/?_method=PATCH`,
        {
          title: nameUpdate,
          price: priceUpdate,
          discountPrice: discountedPriceUpdate,
          img: photoUpdate,
        }
      );
      // Optionally refresh the data or show success message
    } catch (error) {
      console.error("Failed to update product", error);
    }
  };

  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/admin/course/${id}/delete`);
      // Clear state after deletion or redirect to another page
      setName("");
      setPrice(0);
      setDiscountedPrice(0);
      setPhoto("");
    } catch (error) {
      console.error("Failed to delete product", error);
    }
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="product-management">
        <section>
          <strong>ID - {id}</strong>
          {photo && <img src={photo} alt="Product" />}
          <p>{name}</p>
          <h3>Rs. {price}</h3>
          <p>Discounted Price: Rs. {discountedPrice}</p>
        </section>

        <article>
          <form onSubmit={submitHandler}>
            <h2>Manage Product</h2>
            <div>
              <label>Name</label>
              <input
                required
                type="text"
                placeholder="Name"
                value={nameUpdate}
                onChange={(e) => setNameUpdate(e.target.value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input
                required
                type="number"
                placeholder="Price"
                value={priceUpdate}
                onChange={(e) => setPriceUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Discounted Price</label>
              <input
                required
                type="number"
                placeholder="Discounted Price"
                value={discountedPriceUpdate}
                onChange={(e) =>
                  setDiscountedPriceUpdate(Number(e.target.value))
                }
              />
            </div>
            <div>
              <label>Photo URL</label>
              <input
                required
                type="text"
                placeholder="Photo URL"
                value={photoUpdate}
                onChange={(e) => setPhotoUpdate(e.target.value)}
              />
            </div>

            {photoUpdate && <img src={photoUpdate} alt="New Image" />}

            <button type="submit">Update</button>
            <button
              type="button"
              className="delete-btn"
              onClick={deleteHandler}
            >
              Delete Product
            </button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProductManagement;
