import { ElementType } from "react";
import { CardFront } from "../../Organisms/Card";
import styles from "./style.module.css";

export type Props = {
  image: string;
  title: string;
  copy: string;
  content: string;
  variant:
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline"
    | "inherit"
    | undefined;
  color: string;
  component: ElementType<any>;
};

export const CardSection: React.FC<Props> = ({
  image,
  title,
  copy,
  content,
  variant,
  color,
  component,
}) => {
  return (
    <div id="card" className={`${styles.card} ${styles.is_surface}`}>
      <div className={styles.card_surface}>
        <CardFront
          image={image}
          title={title}
          copy={copy}
          content={content}
          variant={variant}
          color={color}
          component={component}
        />
      </div>
    </div>
  );
};
