import React from "react";

const Course = ({ courses, title }) => {
  return (
    <div>
      <Header1 title={title} />
      {courses.map(course => (
        <div key={course.id}>
          <Header2 title={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </div>
  );
};
const Header1 = props => {
  return <h1>{props.title}</h1>;
};
const Header2 = props => {
  return <h2>{props.title}</h2>;
};

const Content = props => {
  return (
    <div>
      {props.parts.map(part => (
        <Part key={part.id} part={part.name} excercises={part.exercises} />
      ))}
    </div>
  );
};

const Part = props => {
  return (
    <p>
      {props.part} {props.excercises}
    </p>
  );
};

const Total = props => {
  const exercises = props.parts.map(part => part.exercises);
  const sum = exercises.reduce((acc, curVal) => acc + curVal);

  return <p style={{ fontWeight: "bold" }}>{`total of ${sum} exercises `}</p>;
};

export default Course;
