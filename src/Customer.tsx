import { useState } from "react";

const Customer = () => {
  const [data, setData] = useState({
    id: 1,
    name: "siva",
    address: { street: "street 1", city: "chennai", country: "india" },
  });

  const handleClick = () => {
    // data.name = "siva kumar";
    // setData(data);
    // console.log(data);

    // let newData = { ...data };
    // newData.name = "siva kumar";
    // setData(newData);

    setData({
      ...data,
      name: "siva kumar",
      address: { ...data.address, street: "street 2" },
    });
  };

  return (
    <div>
      <h2>Customer</h2>
      <p>{data.name}</p>
      <p>{data.address.street}</p>
      <button onClick={handleClick}>Update</button>
    </div>
  );
};

export default Customer;
