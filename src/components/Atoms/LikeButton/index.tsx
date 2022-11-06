import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const LikeButton = () => {
  return (
    <IconButton aria-label="add to favorites">
      <FavoriteIcon />
    </IconButton>
  );
};
