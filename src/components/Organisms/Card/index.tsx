import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import { ElementType } from "react";

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

export const CardFront: React.FC<Props> = ({
  image,
  title,
  copy,
  content,
  variant,
  color,
  component,
}) => {
  return (
    <Card>
      <img
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
        src={image}
        alt={title}
      />
      <CardHeader title={title} subheader={copy} />
      <CardContent>
        <Typography variant={variant} color={color} component={component}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};
