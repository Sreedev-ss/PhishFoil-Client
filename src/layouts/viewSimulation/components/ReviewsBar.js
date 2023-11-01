import React from 'react';
import ReviewsProvider from './ReviewsProvider';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from "prop-types";

const ReviewsBar = ({ score }) => {


    // function for calculating the color
    const calcColor = (percent, start, end) => {
        let a = percent / 100,
            b = (end - start) * a,
            c = b + start;

        // return an CSS hsl color string
        return 'hsl(' + c + ', 100%, 50%)';
    };

    return (
        <ReviewsProvider valueStart={0} valueEnd={score}>
            {(value) => (
                <CircularProgressbar
                    value={value}
                    text={`${value} %`}
                    circleRatio={0.7} /* Make the circle only 0.7 of the full diameter */
                    styles={{
                        trail: {
                            strokeLinecap: 'butt',
                            transform: 'rotate(-126deg)',
                            transformOrigin: 'center center',
                        },
                        path: {
                            strokeLinecap: 'butt',
                            transform: 'rotate(-126deg)',
                            transformOrigin: 'center center',
                            stroke: calcColor(value, 0, 120),
                        },
                        text: {
                            fill: 'black',
                        },
                    }}
                    strokeWidth={10}
                />
            )}
        </ReviewsProvider>
    );
};


ReviewsBar.defaultProps = {
    score: 0
}

ReviewsBar.propTypes = {
    score: PropTypes.number
}
export default ReviewsBar;