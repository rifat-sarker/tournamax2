import dynamic from "next/dynamic";

// import HomePage from "@/components/Home";
const HomePage = dynamic(() => import("@/components/Home"), { ssr: false });
export default function Home() {
  return <HomePage />;
}
