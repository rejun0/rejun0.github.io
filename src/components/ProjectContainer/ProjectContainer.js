import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'
import { RxNotionLogo } from 'react-icons/rx'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <a href='https://maize-clementine-b48.notion.site/Dot-a6b41d04e8674f5c836f147f88700364?pvs=4'>
      <h3>{project.name}</h3>
      <img
        className='project__description'
        src={project.description}
        alt='Description'
      />
    </a>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <RxNotionLogo size={24} />
      </a>
    )}
  </div>
)

export default ProjectContainer
