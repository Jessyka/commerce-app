import {StoryFn} from '@storybook/addons'
import GlobalStyles from '../src/styles/global'

const withGlobalStyle = (storyFn : StoryFn) => (
    <>
    <GlobalStyles/>
    {storyFn()}
    </>
)

export default withGlobalStyle