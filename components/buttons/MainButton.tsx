import { MouseEventHandler, ReactNode } from "react";
import styles from "@/styles/utils.module.css";

type MainButtonProps = {
    type?: "button" | "submit";
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
    color?: string;
    txtColor?: string;
};

function MainButton({
    type = "button",
    handleClick = () => console.log("Button clicked"),
    children,
    color = "var(--primary)",
    txtColor = "var(--tertiary)",
}: // color = "var(--primary)",
MainButtonProps) {
    return (
        <button
            onClick={handleClick}
            className={styles.mainButton}
            style={{ backgroundColor: color, color: txtColor }}
            type={type}
        >
            {children}
        </button>
    );
}

export default MainButton;
