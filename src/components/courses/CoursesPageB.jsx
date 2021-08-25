import React from "react";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "B",
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

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title.bind}
        />

        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default CoursesPage;
