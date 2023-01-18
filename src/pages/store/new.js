import { useReducer, useState } from "react";

// const storeReducer = (state, event) => {
//   return {
//     ...state,
//     [event.target.name]: event.target.value,
//   };
// };

function store() {
  // const [formData, setFormData] = useReducer(storeReducer, {
  //   storeName: "",
  //   storeAddress: "",
  // });
  const [formData, setFormData] = useState({
    storeName: "",
    storeAddress: "",
  });
  console.log("formData", formData);

  // Submitting data to API
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(formData).length == 0) {
      return console.log("Don't have Form Data");
    }

    let { storeName, storeAddress } = formData;

    const model = {
      name: `${storeName}`,
      address: `${storeAddress}`,
    };

    setFormData({
      storeName: "",
      storeAddress: "",
    });

    console.log(model);
  };

  return (
    <div>
      <h1>Add new store</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={setFormData}
            value={formData.name}
            type="text"
            name="storeName"
            placeholder="Store Name"
          />
        </div>
        <div>
          <input
            onChange={setFormData}
            type="text"
            name="storeAddress"
            placeholder="Store Address"
          />
        </div>

        <button>Create</button>
      </form>
    </div>
  );
}

export default store;
