import styles from './style.module.css'

export type Props = {
    text: string;
    size?: "s" | "m" | "l" | "xl"|null;
}

export const Text: React.FC<Props> = ({ text, size }) => {
    switch (size) {
        case "s":
        return (
            <p className={`${styles.font_s}${styles.common}`}>{text}</p>
        )
        case "l":
        return (
            <p className={`${styles.font_l}${styles.common}`}>{text}</p>
        )
        case "xl":
        return (
        <p className={`${styles.font_xl}${styles.common}`}>{text}</p>
        )
        default:
        return (
        <p className={`${styles.font_m}${styles.common}`}>{text}</p>
        )
    }
    
}
