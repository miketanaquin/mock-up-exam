import Header from "./header/page";
import Welcome from "./welcome/page";
import Top from "./top/page";
import Latest from "./latest/page";
import Upcoming from "./upcoming/page";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Header />
        <Welcome />
        <Top />
        <Latest />
        <Upcoming />
      </main>
    </>
  );
}
