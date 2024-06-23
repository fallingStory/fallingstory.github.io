//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import "./components/IconPanel";
import IconPanel from "./components/IconPanel";

import image from "./assets/1.jpg";

function App() {
  const items = [
    "/src/assets/1.jpg",
    "/src/assets/2.jpg",
    "/src/assets/3.jpg",
    "/src/assets/4.jpg",
    "/src/assets/5.jpg",
    "/src/assets/6.jpg",
    "/src/assets/7.jpg",
    "/src/assets/8.jpg",
    "/src/assets/9.jpg",
    "/src/assets/10.jpg",
    "/src/assets/11.jpg",
    "/src/assets/12.jpg",
    "/src/assets/13.jpg",
    "/src/assets/14.jpg",
    "/src/assets/15.jpg",
    "/src/assets/1.jpg",
    "/src/assets/2.jpg",
    "/src/assets/3.jpg",
    "/src/assets/4.jpg",
    "/src/assets/5.jpg",
    "/src/assets/6.jpg",
    "/src/assets/7.jpg",
    "/src/assets/8.jpg",
    "/src/assets/9.jpg",
    "/src/assets/10.jpg",
    "/src/assets/11.jpg",
    "/src/assets/12.jpg",
    "/src/assets/13.jpg",
    "/src/assets/14.jpg",
    "/src/assets/15.jpg",
    "/src/assets/1.jpg",
    "/src/assets/2.jpg",
    "/src/assets/3.jpg",
    "/src/assets/4.jpg",
    "/src/assets/5.jpg",
    "/src/assets/6.jpg",
    "/src/assets/7.jpg",
    "/src/assets/8.jpg",
    "/src/assets/9.jpg",
    "/src/assets/10.jpg",
    "/src/assets/11.jpg",
    "/src/assets/12.jpg",
    "/src/assets/13.jpg",
    "/src/assets/14.jpg",
    "/src/assets/15.jpg",
  ];

  console.log(image);

  return (
    <>
      <header>
        <h1>IMAGE DATABASE</h1>
      </header>
      <IconPanel items={items} heading="Pictures" />
      <IconPanel items={items} heading="More Pictures" />
      <IconPanel items={items} heading="Even More Pictures!" />
    </>
  );
}

export default App;
