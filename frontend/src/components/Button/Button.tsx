import styles from "./Button.module.css";

interface Props {
  children: string;
  colour?: 'dark_grey' | 'light_grey';
  onClick: () => void;
}

const Button = ({ children, colour = "dark_grey", onClick }: Props) => {
  return (
    <button className={`${styles.button} ${styles[colour]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
