import React from "react";
import { useNavigate } from "react-router-dom";
import { Category } from "../../store/categories/category.types";
import { DirectoryCategory } from "../directory/directory.component";

import {
  Body,
  BackgroundImage,
  DirectoryItemContainer,
} from "./directory-item.styles";

type DirectoryItemProps = {
  category: DirectoryCategory
}

const DirectoryItem = ({ category }:DirectoryItemProps) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
