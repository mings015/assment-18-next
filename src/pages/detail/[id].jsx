import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FORMAT_DATE } from "@/helper/convertTime";
import { API_KEY, BASE_URL, END_POINT } from "@/helper/endpoint";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
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

    return { props: { food } };
  } catch (error) {
    console.error("Failed to fetch foods:", error);
    return {
      notFound: true,
    };
  }
}

const DetailMenu = (props) => {
  const { food } = props;

  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Link href="/">
          <Button className="mt-5">Back</Button>
        </Link>

        <h1 className="py-5 text-5xl text-center font-base">
          Halaman Detail Menu
        </h1>
      </div>
      <div className="flex items-start justify-center h-screen">
        <Card key={food.id} className="relative bg-bg w-[350px]">
          <CardHeader>
            <CardTitle>
              <div className="container mb-5 bg-black border-2 border-border rounded-base shadow-light">
                <Image
                  width={500}
                  height={500}
                  src={food.imageUrl}
                  priority={true}
                  className="w-full aspect-square"
                  alt={`Picture of ${food.name}`}
                />
              </div>
            </CardTitle>
            <CardTitle>{food.name}</CardTitle>
            <CardDescription>
              Dibuat : {FORMAT_DATE(food.createdAt)}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default DetailMenu;
