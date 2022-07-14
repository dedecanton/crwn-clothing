import React from "react";
import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";
import categories from "./categories.json";
import { CategoryItem } from "../../store/categories/category.types";

export type DirectoryCategory= {
  id: number,
  title: string,
  imageUrl: string,
  route: string;
}

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category:DirectoryCategory) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
