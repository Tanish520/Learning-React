import { Loader } from "rsuite";
import 'rsuite/dist/rsuite.min.css';

const LoaderComp = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <Loader size="lg" />
    </div>
  );
};

export default LoaderComp;
