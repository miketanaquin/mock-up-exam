import Image from "next/image";
import Header from "./header/page";
import Welcome from "./welcome/page";
import Top from "./top/page";
import Latest from "./latest/page";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Header />
        <Welcome />
        <Top />
        <Latest />
      </main>
    </>
  );
}
