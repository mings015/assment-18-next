import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProtectRoute from "@/components/ProtectRoute";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { API_KEY, BASE_URL, END_POINT } from "@/helper/endpoint";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps() {
  const header = {
    headers: {
      apiKey: `${API_KEY}`,
    },
  };
  try {
    const res = await axios.get(
      `${BASE_URL.API}${END_POINT.GET_FOODS}`,
      header
    );
    const foods = await res.data.data;
    return { props: { foods } };
  } catch (error) {
    console.error("Failed to fetch foods:", error);
  }
}

export default function Home(props) {
  const { foods } = props;
  return (
    <ProtectRoute>
      <Header />
      <div>
        <h1 className="p-10 text-5xl text-center font-base">
          Halaman List Menu
        </h1>
        <div className="flex flex-wrap justify-center gap-10 pb-10">
          {foods.map((food) => (
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
              </CardHeader>
              <CardFooter>
                <Link href={`/${food.id}`}>
                  <Button>Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </ProtectRoute>
  );
}
