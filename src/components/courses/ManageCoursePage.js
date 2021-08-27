import React from "react";


export default class ManageCoursePage extends React.Component {
    state = {
        course: {
            title: "Be Aware of State Model 101",
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

    mapStateToProps() {
        return {
            bindActionCreators() { },
        };
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind}>
                <h2>Manage Your Laerning</h2>
                <h3>Add To Course List</h3>
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
