import React from "react";
import { connect } from "react-redux";
import * as courseActions from "./components/redux/actions/courseActions";
/**Not sure why this: "Failed To Complie"
 * ---> Error
 * Module not found
 * CoursesPageB.jsx was made simularly but neither are importing w/o failing to complie.
 * But the path looks right. 
 */
import PropTypes from "prop-types";
class CoursesPage extends React.Component {
  state = {
    course: {
      title: "Aware of State 101",
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
    this.props.dispatch(courseActions.createCourse(this.state.course));
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
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

export default connect(mapStateToProps)(CoursesPage);
