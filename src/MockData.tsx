import { DataType } from "./App";

export const mockData: DataType = [
  {
    sId: 1,
    path: "section-a",
    categories: [
      {
        cId: 1,
        path: "category-one-a",
        faqs: [
          {
            fId: 1,
            question: "question 1",
            answer: "answer 1",
          },
          {
            fId: 2,
            question: "question 2",
            answer: "answer 2",
          },
        ],
      },
      {
        cId: 2,
        path: "category-two-a",
        faqs: [
          {
            fId: 3,
            question: "question 3",
            answer: "answer 3",
          },
          {
            fId: 4,
            question: "question 4",
            answer: "answer 4",
          },
        ],
      },
    ],
  },
  {
    sId: 2,
    path: "section-b",
    categories: [
      {
        cId: 1,
        path: "category-one-b",
        faqs: [
          {
            fId: 5,
            question: "question 5",
            answer: "answer 5",
          },
          {
            fId: 6,
            question: "question 6",
            answer: "answer 6",
          },
        ],
      },
      {
        cId: 2,
        path: "category-two-b",
        faqs: [
          {
            fId: 7,
            question: "question 7",
            answer: "answer 7",
          },
          {
            fId: 8,
            question: "question 8",
            answer: "answer 8",
          },
        ],
      },
      {
        cId: 3,
        path: "category-three-b",
        faqs: [
          {
            fId: 9,
            question: "question 9",
            answer: "answer 9",
          },
          {
            fId: 10,
            question: "question 10",
            answer: "answer 10",
          },
        ],
      },
    ],
  },
];