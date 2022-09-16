import { Link } from "react-router-dom";
import { Category } from "./App";

type Props = {
  sectionPath: string;
  categoryPath: string | undefined;
  category: Category;
};
export default function AppCategory(props: Props) {
  return (
    <div className={buildClassName(props.categoryPath, props.category)}>
      <Link to={`${props.sectionPath}/${props.category.path}`}>
        {props.category.path}
      </Link>
    </div>
  );
}

function buildClassName(categoryPath: string | undefined, category: Category) {
  return `${categoryPath === category.path ? "selected" : ""}`;
}
