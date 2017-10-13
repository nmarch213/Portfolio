import React, { Component } from 'react';
import _ from 'lodash';
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  CardBody,
  CardImg,
  Badge,
  Button
} from 'reactstrap';

class ProjectCard extends Component {
  renderTech(techA) {
    return _.map(techA, tech => <Badge key={tech}>{tech}</Badge>);
  }

  renderImg(project) {
    if (project.img) {
      return <CardImg top width="100%" src={project.img.src} />;
    }
  }

  renderButton(project) {
    if (project.github) {
      return (
        <Button href={project.github} target="_blank">
          Check it out!
        </Button>
      );
    }
  }

  render() {
    const { project } = this.props;
    console.log(this.props);
    return (
      <Card>
        <CardBody>
          {this.renderImg(project)}
          <CardTitle>{project.name}</CardTitle>
          <CardSubtitle>{this.renderTech(project.tech)}</CardSubtitle>
          <CardText>{project.description}</CardText>
          {this.renderButton(project)}
        </CardBody>
      </Card>
    );
  }
}

export default ProjectCard;
