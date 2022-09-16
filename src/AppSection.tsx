import { Link } from "react-router-dom";
import { Section } from "./App";

type Props = {
  sectionPath: string | undefined;
  section: Section;
};
export default function AppSection(props: Props) {
  return (
    <div className={buildClassName(props.sectionPath, props.section)}>
      <Link to={props.section.path}>{props.section.path}</Link>
    </div>
  );
}

function buildClassName(sectionPath: string | undefined, section: Section) {
  return `${sectionPath === section.path ? "selected" : ""}`;
}
