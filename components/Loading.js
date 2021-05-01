import { Grid } from "@material-ui/core";
import { Circle } from "better-react-spinkit";
function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="https://i.pinimg.com/564x/f7/5d/94/f75d94874d855a7fcfcc922d89ac5e80.jpg"
          alt=""
          style={{ marginBottom: 10 }}
          height={200}
        />
        <Circle color="#3CB2CB" size={60} />
      </div>
    </center>
  );
}
export default Loading;
