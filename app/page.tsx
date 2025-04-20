"use server";
import HomeScreen from "@/components/screens/Home/HomeScreen";
import Footer from "@/components/layouts/Footer";
import { MobileLayout } from "@/components/layouts/MobileLayout";

export default async function Home() {
  return (
    <MobileLayout>
      <HomeScreen />
      <Footer />
    </MobileLayout>
  );
}
