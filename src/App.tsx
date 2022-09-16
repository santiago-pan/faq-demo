import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./App.css";
import AppCategory from "./AppCategory";
import AppFaq from "./AppFaq";
import AppSection from "./AppSection";
import { mockData } from "./MockData";

export type DataType = Array<Section>;

export type Section = {
  sId: number;
  path: string;
  categories: Array<Category>;
};

export type Category = {
  cId: number;
  path: string;
  faqs: Array<FAQ>;
};

export type FAQ = {
  fId: number;
  question: string;
  answer: string;
};

type Selection = {
  section: string | undefined;
  category: string | undefined;
};

function App() {
  const [data, setData] = useState<DataType | null>(null);

  const params = useParams<Selection>();
  const { hash } = useLocation();

  useEffect(() => {
    // Mock delay fetch data
    setTimeout(() => {
      setData(mockData);
    }, 1000);
  }, []);

  if (data === null) {
    return <div>Loading FAQs...</div>;
  }

  return (
    <div className="App-Container">
      <SectionsColumn data={data} section={params.section} />
      <CategoriesColumn
        data={data}
        section={params.section}
        category={params.category}
      />
      <FaqPanel
        data={data}
        section={params.section}
        category={params.category}
        hash={hash}
      />
    </div>
  );
}

/**
 * Renders the column with sections
 */
function SectionsColumn(props: {
  data: DataType;
  section: string | undefined;
}) {
  return (
    <div className="App-Section">
      {props.data.map((section) => {
        return (
          <AppSection
            sectionPath={props.section}
            key={section.sId}
            section={section}
          />
        );
      })}
    </div>
  );
}

/**
 * Renders the column with categories
 */
function CategoriesColumn(props: {
  data: DataType;
  section: string | undefined;
  category: string | undefined;
}) {
  const sectionPath = props.section;
  if (!sectionPath) {
    return <></>;
  }

  return (
    <div className="App-Category">
      {findCategoriesOfSection(props.data, sectionPath).map((category) => (
        <AppCategory
          key={category.cId}
          sectionPath={sectionPath}
          categoryPath={props.category}
          category={category}
        />
      ))}
    </div>
  );
}

/**
 * Renders the panel with the FAQs
 */
function FaqPanel(props: {
  data: DataType;
  section: string | undefined;
  category: string | undefined;
  hash: string | undefined;
}) {
  if (!props.section || !props.category) {
    return <></>;
  }

  const sectionPath = props.section;
  const categoryPath = props.category;

  return (
    <div className="App-Faq">
      {findFaqOfCategory(props.data, props.section, props.category).map(
        (faq) => {
          return (
            <AppFaq
              key={faq.fId}
              sectionPath={sectionPath}
              categoryPath={categoryPath}
              hash={props.hash}
              faq={faq}
            />
          );
        }
      )}
    </div>
  );
}

function findCategoriesOfSection(data: DataType, section: string) {
  return data.find((sec) => sec.path === section)?.categories ?? [];
}

function findFaqOfCategory(data: DataType, section: string, category: string) {
  return (
    findCategoriesOfSection(data, section).find((cat) => cat.path === category)
      ?.faqs ?? []
  );
}

export default App;
