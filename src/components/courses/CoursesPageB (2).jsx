import React from "react";


class CoursesPageB extends React.Component {
  state = {
    history: [{
      squares: Array(9).fill(null),
      clicked: null,
      pastXIsNext: false,
    }],
    xIsNext: true, // X starts first
    stepNumber: 0,
    movesReversed: false,
    course: {
      title: "TicTakado",
    },
  };


  handleChange = (event) => {
    event.preventDefault();
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
    alert(this.state.course.title);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.course.title.bind.this);
  };

