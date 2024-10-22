import ProtectRoute from "@/components/ProtectRoute";
import { API_KEY, BASE_URL, END_POINT } from "@/helper/endpoint";
import axios from "axios";
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
      <div>
        <h1>Halo</h1>
        {foods.map((food) => (
          <div key={food.id}>
            <p>{food.name}</p>
            <Link
              href={`/${food.id}`}
              className="inline-block mt-2 text-blue-600 hover:text-blue-800"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </ProtectRoute>
  );
}
