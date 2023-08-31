import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

function Home() {
  const storedData = useSelector((state: RootState) => state.info);
  return <div> Hello + {storedData.user}</div>;
}

export default Home;
