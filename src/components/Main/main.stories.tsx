import { withKnobs, text } from '@storybook/addon-knobs'
import Main from './index'

export default {
  title: 'Main page',
  decorators: [withKnobs],
  component: Main
}

export const Basic = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS e Styled Components'
    )}
  />
)
