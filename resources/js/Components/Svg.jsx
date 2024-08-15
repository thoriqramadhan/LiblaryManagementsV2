export const HomeSvg = ({ ...props }) => (
    <svg
        width={props.height}
        height={props.height}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
    >
        <path
            d="M18 44V24H30V44M6 18L24 4L42 18V40C42 41.0609 41.5786 42.0783 40.8284 42.8284C40.0783 43.5786 39.0609 44 38 44H10C8.93913 44 7.92172 43.5786 7.17157 42.8284C6.42143 42.0783 6 41.0609 6 40V18Z"
            stroke={props.color}
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);

export const ListSvg = ({ ...props }) => (
    <svg
        width={props.width}
        height={props.height}
        className={props.className}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M16 12H42M16 24H42M16 36H42M6 12H6.02M6 24H6.02M6 36H6.02"
            stroke={props.color}
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);
