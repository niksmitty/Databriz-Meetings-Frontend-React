import React, { Component } from 'react'

import { connect } from 'react-redux';
import { fetchProjects } from '../../services/projects/actions';

import './ProjectsPage.css';

class ProjectsPage extends Component {

    componentDidMount() {
        const {fetchProjects} = this.props;
        fetchProjects();
    }

    render() {
        const { projects } = this.props;

        const projectNames = projects.map(project => {
            return (
                <li className="project-item" key={project.id}>
                    {project.name}
                </li>
            )
        });

        return (
                <div>
                    <ul className="projects">
                        {projectNames}
                    </ul>
                </div>
        )
    }

}

const mapStateToProps = state => ({
    projects: state.projects.projects
});

const mapDispatchToProps = {
    fetchProjects
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectsPage);