import { MouseEventHandler } from "react";

export interface CustonButtonProps {
    title: string;
    containerStyle?: string;
    handelClick?: MouseEventHandler<HTMLButtonElement>;
}