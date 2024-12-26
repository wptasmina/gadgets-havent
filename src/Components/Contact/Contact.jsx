import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Contact = () => {
  const [owners, SetOwners] = useState([]);
  useEffect(() => {
    fetch("./Owner.json")
      .then((res) => res.json())
      .then((data) => SetOwners(data));
  }, []);

  return (
    <div>
      <h2 className="md:text-5xl text-3xl text-center my-10 font-extrabold text-[#9538E2]">
        Our Owners & Employees
      </h2>
      <div className="grid my-10 md:grid-cols-3 gap-6">
        {owners.map((owner) => (
          <div class="card bg-base-100 shadow-xl">
            <div className="">
              <img
                className="rounded-lg w-full h-[300px] object-cover"
                src={owner.image}
                alt={owner.name}
              />
            </div>
            <div class="card-body">
              <h2 class="card-title">{owner.name}</h2>
              <p className="font-bold text-xl">{owner.role}</p>
              <p className="font-bold underline">{owner.phone}</p>
              <p className="font-bold underline">{owner.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
