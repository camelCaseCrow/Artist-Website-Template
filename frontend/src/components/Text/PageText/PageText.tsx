import Styles from "./PageText.module.css"

interface Props {
  heading?: string;
  mainText?: string;
}

const PageText = ({ heading, mainText }: Props) => {
  return (
    <>
      <h1 className={Styles.heading}>{heading}</h1>
      <p className={Styles.mainText}>{mainText}</p>
    </>
  );
};

export default PageText;
