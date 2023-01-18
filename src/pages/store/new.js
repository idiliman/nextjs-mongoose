import { useState, useReducer } from "react";

const initialValue = {
  storeName: "",
  storeAddress: "",
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "update":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case "submit": {
      return initialValue;
    }
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function store() {
  const [storeState, dispatchStore] = useReducer(storeReducer, initialValue);
  // console.log("formData", storeState);

  const inputAction = (event) => {
    dispatchStore({
      type: "update",
      payload: { key: event.target.name, value: event.target.value },
    });
  };

  // Submitting data to API
  const handleSubmit = (event) => {
    event.preventDefault();

    if (storeState.storeName === initialValue.storeName) {
      return console.log("Don't have Form Data");
    }

    let { storeName, storeAddress } = storeState;

    const model = {
      name: `${storeName}`,
      address: `${storeAddress}`,
    };

    console.log(model);
    console.log("Submitted");

    dispatchStore({
      type: "submit",
    });
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setFormData((state) => {
  //     return {
  //       ...state,
  //       [name]: value,
  //     };
  //   });
  // };

  return (
    <div>
      <h1>Add new store</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={inputAction}
            value={storeState.storeName}
            type="text"
            name="storeName"
            placeholder="Store Name"
          />
        </div>
        
        <div>
          <input
            onChange={inputAction}
            value={storeState.storeAddress}
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
