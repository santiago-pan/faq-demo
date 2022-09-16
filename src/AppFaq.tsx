import { Link } from "react-router-dom";
import { FAQ } from "./App";

type Props = {
  sectionPath: string;
  categoryPath: string;
  hash: string | undefined;
  faq: FAQ;
};
export default function AppFaq(props: Props) {
  return (
    <div className={buildClassName(props.hash, props.faq.fId)}>
      <Link
        to={{
          pathname: `${props.sectionPath}/${props.categoryPath}`,
          hash: props.faq.fId.toString(),
        }}
      >
        <strong>{props.faq.question}</strong>
      </Link>
      {props.faq.answer}
    </div>
  );
}

function buildClassName(hash: string | undefined, fId: number) {
  return `${"App-FaqItem"}${hash === `#${fId}` ? " selected" : ""}`;
}
