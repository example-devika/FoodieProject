import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Add = ({urlprop}) => {
  const [image, setimage] = useState(false);
  const [data, setdata] = useState({
    name: "",
    description: "",
    price: "",
    category: "salad",
  });
  const onchangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata((data) => ({ ...data, [name]: value }));
    console.log(name);
    console.log([name]);
    console.log(value);
  };
  // console.log(data)
  // useEffect(()=>{
  // console.log(data)

  // },[data])//checking purpose
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("form submitted")
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", Number(data.price));
    formData.append("image", image);

    const response = await axios.post(`${urlprop}/api/add`, formData);
    console.log(response)
    if (response.data.success) {
        setdata({
            name: "",
            description: "",
            price: "",
            category: "Salad",
        });
        setimage(null); // Clear the image state
       toast.success(response.data.message)

    }


    
    else{
        //fooddata is not got added  to database.
        toast.error(response.data.message)


    }

  };
  return (
    <div className="add">
      <form action="" className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="upload-img"
            />
          </label>
          <input
            type="file"
            id="image"
            onChange={(e) => setimage(e.target.files[0])}
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            type="text"
            placeholder="Type here"
            onChange={onchangeHandler}
            name="name"
            value={data.name}
          />
        </div>
        <div className="add-product-desc flex-col">
          <p>Product Description</p>
          <textarea
            name="description"
            id="description"
            rows="6"
            onChange={onchangeHandler}
            placeholder="Write content here"
            required
            value={data.description}

          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Producr category</p>
            <select name="category" id="" onChange={onchangeHandler}
            value={data.category}
            >
              <option value="salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="sandwich">Sandwich</option>
              <option value="cake">Cake</option>
              <option value="Pure veg">Pure veg</option>

              <option value="Pasta">Pasta</option>
              <option value="Deserts">Deserts</option>

              <option value="noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input
            value={data.price}

              type="number"
              name="price"
              onChange={onchangeHandler}
              id=""
              placeholder="$20"
            />
          </div>
        </div>
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
