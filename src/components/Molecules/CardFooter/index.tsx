import { CardActions } from "@mui/material";
import { ShareButton, LikeButton } from "../../Atoms/Button";

export const CardFooter = () => {
  return (
    <CardActions disableSpacing>
      <LikeButton />
      <ShareButton />
    </CardActions>
  );
};
