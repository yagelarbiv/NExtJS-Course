import { cookies } from "next/headers";


export default function AboutPage() {
  const cookiesStore = cookies();
  const theme = cookiesStore.get("theme");
  console.log("About Page", theme);
  
  console.log("About Server component");
  return (
    <div>
      <h1> About Page {new Date().toLocaleTimeString()}</h1> 
    </div>
  );
};
