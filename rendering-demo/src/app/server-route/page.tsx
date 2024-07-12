import ImageSlider from "@/components/image-slider";
import { serverSideFunction } from "@/utils/server-utils";


export default function ServerRoutePage() {
  console.log('Server Route rendered');
  const result = serverSideFunction();
  return (
    <div>
      page
      <p>{result}</p>
      <ImageSlider />
    </div>
  );
};
