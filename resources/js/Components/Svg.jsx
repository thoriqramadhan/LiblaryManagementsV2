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

export const BackArrowSvg = ({ ...props }) => (
    <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M38 24H10M10 24L24 38M10 24L24 10"
            stroke={props.color}
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);

export const ServiceSvg = ({ ...props }) => (
    <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M29.4 12.6C29.0335 12.9738 28.8283 13.4765 28.8283 14C28.8283 14.5235 29.0335 15.0261 29.4 15.4L32.6 18.6C32.9739 18.9664 33.4765 19.1717 34 19.1717C34.5235 19.1717 35.0261 18.9664 35.4 18.6L42.94 11.06C43.9457 13.2824 44.2502 15.7585 43.8129 18.1583C43.3757 20.5581 42.2174 22.7677 40.4926 24.4925C38.7677 26.2174 36.5581 27.3757 34.1583 27.8129C31.7585 28.2502 29.2824 27.9457 27.06 26.94L13.24 40.76C12.4444 41.5556 11.3652 42.0026 10.24 42.0026C9.11478 42.0026 8.03565 41.5556 7.24 40.76C6.44435 39.9643 5.99736 38.8852 5.99736 37.76C5.99736 36.6348 6.44435 35.5556 7.24 34.76L21.06 20.94C20.0543 18.7176 19.7498 16.2415 20.1871 13.8417C20.6243 11.4419 21.7826 9.2323 23.5074 7.50743C25.2323 5.78256 27.4419 4.62433 29.8417 4.18707C32.2415 3.74982 34.7176 4.05432 36.94 5.05999L29.4 12.6Z"
            stroke={props.color}
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);
