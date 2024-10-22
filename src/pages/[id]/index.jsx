import ProtectRoute from "@/components/ProtectRoute";
import { API_KEY, BASE_URL, END_POINT } from "@/helper/endpoint";
import axios from "axios";
import Image from "next/image";
import React from "react";

export async function getServerSideProps({ query }) {
  const header = {
    headers: {
      apiKey: `${API_KEY}`,
    },
  };
  try {
    const res = await axios.get(
      `${BASE_URL.API}${END_POINT.GET_FOODS}/${query.id}`,
      header
    );
    const food = await res.data.data;
    console.log(food);

    return { props: { food } };
  } catch (error) {
    console.error("Failed to fetch foods:", error);
  }
}

const DetailMenu = (props) => {
  const { food } = props;

  return (
    <ProtectRoute>
      <div>{food.name}</div>
      <div>{food.createdAt}</div>

      {/* <Image
        src={food.imageUrl}
        width={500}
        height={500}
        alt="Picture of the author"
      /> */}
    </ProtectRoute>
  );
};

export default DetailMenu;
