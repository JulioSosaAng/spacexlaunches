import { Image } from "@chakra-ui/react";
import { Routes , Route } from "react-router-dom";
import { LaunchesList } from "./components/LaunchList";
import { LaunchDetail } from "./components/LaunchDetails";
import { RocketDetail } from "./components/RocketDetails"
import logo from "./assets/spacex_logo.png";



export function App() {
  return (
    <>
      <Image src={logo} width={300} m={4}/>
      <Routes>
        <Route path="/" element={<LaunchesList />} />
        <Route path="launch/:launchId" element={<LaunchDetail />} />
        <Route path="rockets/:rocketId" element={<RocketDetail />} />
      </Routes>
      
    </>
    )
  
}

export default App;
