import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Form = () => {
  const IMG_TOKEN = import.meta.env.VITE_IMGBB_TOKEN;

  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${IMG_TOKEN}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgURL,
          };
          console.log({newItem});
          fetch(`http://localhost:5000/menu`, {
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify(newItem),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
      });
  };

  // ours
  // const handleSubmit = (e) => {
  //   const IMG_URL = `https://api.imgbb.com/1/upload?expiration=600&key=${IMG_TOKEN}`;
  //   e.preventDefault();
  //   const Form = e.target;
  //   const name = Form.recipeName.value
  //   const price = Form.price.value
  //   const details = Form.details.value
  //   const category = Form.category.value
  //   const file = Form.file.files;
  //   // const data = { recipeName, price, details, category, file }
  //   console.log(file[0]);

  //   const ImageData = new FormData();
  //   ImageData.append("image", file[0]);
  //   fetch(IMG_URL, {
  //     method: "POST",
  //     body: ImageData,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // };

  return (
    <div className="w-full px-10">
      <SectionTitle
        subHeading="What's new"
        heading="Add an item"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue="Pick One"
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick One</option>
              <option>pizza</option>
              <option>soup</option>
              <option>salad</option>
              <option>dessert</option>
              <option>desi</option>
              <option>drinks</option>
            </select>
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Item Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>
        <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default Form;


