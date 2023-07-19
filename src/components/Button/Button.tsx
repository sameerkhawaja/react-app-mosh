import styles from './Button.module.css'

interface ButtonProps {
    children: string;
    color?: "primary" | "secondary" | "danger";
    onClick: () => void;
}

// const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
//     return (
//         <button type="button" className={"btn btn-" + color} onClick={onClick}>
//             {children}
//         </button>
//     );
// };

const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
    return (
        <button type="button" className={[styles.btn, styles['btn-' + color]].join(' ')}>Click me</button>
    )
}

export default Button;
