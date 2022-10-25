import { Card, CardMedia, CardHeader, CardContent, Typography } from "@mui/material";
import { ElementType } from "react";
import { CardFooter } from "../../Molecules/CardFooter";

export type Props = {
    image: string;
    title: string;
    copy: string;
    content: string;
    variant: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | "inherit" | undefined;
    color: string;
    component: ElementType<any>;
}

export const CardBack: React.FC<Props> = ({image, title, copy, content, variant, color, component}) => {

    return (
        <Card>
            <CardHeader
                title="裏です"
                subheader={copy}
            />
            <CardContent>
                <Typography variant={variant} color={color} component={component}>
                    {content}
                </Typography>
            </CardContent>
            <CardFooter/>
        </Card>
    )
}
