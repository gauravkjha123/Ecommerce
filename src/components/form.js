import FormStyle from "../style/form.style.module.css";
import { useRef, useState } from "react";

export const Form = ({ value, update = false, updateAlbumFn,addAlbumFn }) => {

  const [title, setTitle] = useState("");
  const titleRef = useRef();

  if (!title && value?.title) {
    setTitle(value.title);
  }
  const handleOnChange = () => {
    setTitle(titleRef.current.value);
  };
  const handleClick = () => {
    if (!titleRef.current.value && !title) {
      alert("Please Enter Title");
    }

    if (update) {
      updateAlbumFn({ id: value.id, title: title });
      return;
    }
    addAlbumFn({ title: title })
    return
  };
  return (
    <>
      <div className={FormStyle.container}>
        <h2>Add a Procuct</h2>
        <div className={FormStyle.inpcontainer}>
          <input
            required
            value={title}
            ref={titleRef}
            onChange={handleOnChange}
            type="text"
            placeholder="Name"
            
          />
        </div>
        <div className={FormStyle.inpcontainer}>
          <input
            required
            value={title}
            ref={titleRef}
            onChange={handleOnChange}
            type="text"
            placeholder="Description"
            
          />
        </div>
        <div className={FormStyle.inpcontainer}>
          <input
            required
            value={title}
            ref={titleRef}
            onChange={handleOnChange}
            type="number"
            min={1}
            max={2000000}
            placeholder="Price"
            
          />
        </div>
        <div className={FormStyle.inpcontainer}>
          <input
            required
            value={title}
            ref={titleRef}
            onChange={handleOnChange}
            type="text"
            placeholder="Category"
            
          />
        </div>
        <div className={FormStyle.inpcontainer}>
          <input
            required
            value={title}
            ref={titleRef}
            onChange={handleOnChange}
            type="Url"
            placeholder="Name"
            
          />
        </div>
        <div className={FormStyle.inpcontainer}>
          <input
            required
            value={title}
            ref={titleRef}
            onChange={handleOnChange}
            type="number"
            min={1}
            max={5}
            placeholder="Rating"
            
          />
        </div>

        <button onClick={handleClick} className={FormStyle.btn}>
        Create
        </button>
      </div>
    </>
  );
};
