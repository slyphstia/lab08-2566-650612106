import { Header } from "../../component/header";
import { Task } from "../../component/task";
import { Taskinput } from "../../component/taskinput";
import { Footer } from "../../component/footer";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header></Header>

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <Taskinput></Taskinput>
        {/* task */}
        <Task title="Read a book" />
        {/* task */}
        <Task title="Take a shower" />
        {/* task */}
        <Task title="sleep" />
        <div />

        <Footer year="2023" fullname="apiwit boonyarit" studentid="650612106"/>
      </div>
    </div>
  );
}
