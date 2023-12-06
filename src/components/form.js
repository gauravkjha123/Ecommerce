import FormStyle from "../style/form.style.module.css";
import { useState } from "react";

export const Form = ({ addProductFn }) => {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [thumbnail, setthumbmail] = useState("");
  const [rating, setrating] = useState("");

  const handleSubmit = async () => {
    if (!name) {
      return alert("Name can not be emppty");
    }
    if (!price) {
      return alert("Price can not be emppty");
    }
    if (price <= 0) {
      return alert("Price can not be Zero or less than Zero");
    }
    if (rating < 1 || rating > 5) {
      return alert("Rating Should be betwen 1 to 5");
    }
    let product = {
      id: Date.now(),
      title: name,
      price,
      category,
      thumbnail,
      rating,
      description,
      edit: true,
    };
    setname("");
    setcategory("");
    setdescription("");
    setrating("");
    setthumbmail("");
    setprice("");
    addProductFn(product);
  };
  return (
    <>
      <div className={FormStyle.container}>
        <form>
          <h2>Add a Procuct</h2>
          <div className={FormStyle.inpcontainer}>
            <input
              required
              value={name}
              onChange={(e) => setname(e.target.value)}
              type="text"
              placeholder="Name"
            />
          </div>
          <div className={FormStyle.inpcontainer}>
            <input
              required
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              type="text"
              placeholder="Description"
            />
          </div>
          <div className={FormStyle.inpcontainer}>
            <input
              required
              value={price}
              onChange={(e) => setprice(e.target.value)}
              type="number"
              min={1}
              max={2000000}
              placeholder="Price"
            />
          </div>
          <div className={FormStyle.inpcontainer}>
            <input
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              type="text"
              placeholder="Category"
            />
          </div>
          <div className={FormStyle.inpcontainer}>
            <input
              value={thumbnail}
              onChange={(e) => setthumbmail(e.target.value)}
              type="Url"
              placeholder="Thumbnail"
            />
          </div>
          <div className={FormStyle.inpcontainer}>
            <input
              value={rating}
              type="number"
              min={1}
              max={5}
              onChange={(e) => setrating(e.target.value)}
              placeholder="Rating"
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className={FormStyle.btn}
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
};
