import React from 'react'
import ProjectLayout from '../../components/projectLayout'
import data from '../../data/projects/integratedMultimediaProject'

export default class IntegratedMultimediaProject extends React.Component {
  render() {
    return <ProjectLayout data={data} />
  }
}
