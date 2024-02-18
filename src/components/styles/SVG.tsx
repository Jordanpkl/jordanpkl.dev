import { rem } from '@mantine/core';

interface CustomIconProps extends React.ComponentPropsWithoutRef<'svg'> {
    size?: number | string;
}

export function BurgerIcon({ size, style, ...others }: CustomIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            stroke='#fff'
            viewBox="0 0 24 24"
            style={{ width: rem(size), height: rem(size), ...style }}
            {...others}
        >
            <path d="M4 5h1m-1 6h1m-1 6h1M8 5h1Zm4 0h1Zm4 0h1Zm4 0h1ZM8 11h1Zm0 6h1Zm5 0h-1m0-6h1Zm4 0h1m-1 6h1m3 0h1Zm0-6h1Z" />
        </svg>
    )
}
