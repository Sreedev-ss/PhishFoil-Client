import React from "react";
import ReviewsProvider from "./ReviewsProvider";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PropTypes from "prop-types";
import LinearProgress from "@material-ui/core/LinearProgress";

const ReviewsBar = ({ score, report }) => {
  const [progress, setProgress] = React.useState(0);

  // Function for calculating the color
  const calcColor = (percent, start, end) => {
    let a = percent / 100,
      b = (end - start) * a,
      c = b + start;

    // Return a CSS hsl color string
    return "hsl(" + c + ", 100%, 50%)";
  };

  return report ? (
    // <LinearProgress variant="determinate" value={score} /> // Render the Material-UI horizontal bar
    <ReviewsProvider valueStart={0} valueEnd={score}>
      {(value) => (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "30px", marginBottom: "0px" }}>{`${value}%`}</span>
          </div>
          <LinearProgress
            value={value}
            variant="determinate"
            circleRatio={0.7}
            /* Make the circle only 0.7 of the full diameter */
            styles={{
              width: "100%",
              height: "8px",
              trail: {
                strokeLinecap: "butt",
                transform: "rotate(-126deg)",
                transformOrigin: "center center",
              },
              path: {
                strokeLinecap: "butt",
                transform: "rotate(-126deg)",
                transformOrigin: "center center",
                stroke: calcColor(value, 0, 120),
              },
              text: {
                fill: "black",
              },
            }}
            strokeWidth={10}
          />
        </>
      )}
    </ReviewsProvider>
  ) : (
    // Render the circular progress bar
    <ReviewsProvider valueStart={0} valueEnd={score}>
      {(value) => (
        <CircularProgressbar
          value={value}
          text={`${value} %`}
          circleRatio={0.7} /* Make the circle only 0.7 of the full diameter */
          styles={{
            trail: {
              strokeLinecap: "butt",
              transform: "rotate(-126deg)",
              transformOrigin: "center center",
            },
            path: {
              strokeLinecap: "butt",
              transform: "rotate(-126deg)",
              transformOrigin: "center center",
              stroke: calcColor(value, 0, 120),
            },
            text: {
              fill: "black",
            },
          }}
          strokeWidth={10}
        />
      )}
    </ReviewsProvider>
  );
};

ReviewsBar.defaultProps = {
  score: 0,
};

ReviewsBar.propTypes = {
  score: PropTypes.number,
  report: PropTypes.bool,
};

export default ReviewsBar;
