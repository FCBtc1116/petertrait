import React, { Component, PropTypes } from 'react'

import { color } from '../../../vars'

import HeroFeature from '../../../components/HeroFeature'
import Container from '../../../components/Container'
import Column from '../../../components/Column'
import ClientLogo from '../../../components/ClientLogo'
import ListBlock from '../../../components/ListBlock'
import GridBlock from '../../../components/GridBlock'
import Media from '../../../components/Media'

import IntroContent from './intro.md'
import DesignContent from './design.md'
import SystemContent from './system.md'
import BrandContent from './brand.md'

class Nucleus extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.nucleus,
        secondary: color.white
      }
    }
    document.body.style.backgroundColor = this.state.theme.primary
    document.body.style.color = this.state.theme.secondary
  }

  render() {
    const involvement = [
      { name: 'Workflows + product mapping' },
      { name: 'Wireframing' },
      { name: 'User testing' },
      { name: 'Lead design' },
      { name: 'Branding' },
      { name: 'Lead frontend development' },
      { name: 'Atomic design system' },
      { name: 'Responsive webapp design' }
    ]
    return (
      <div>
        <HeroFeature headline='Unifying Internal Communication at AstraZeneca' image='nucleus' />
        <Container>
          <Column width='third'>
            <ClientLogo client='astrazeneca' />
          </Column>
          <Column
            width='twoThird'
            intro='Inconsistencies in communication hampered the business process. AstraZeneca needed a scalable platform to share insights.'
            content={IntroContent}>
            <ListBlock
              title='Project Involvement'
              intro='As the sole designer, I oversaw the entire design of the product from initial ideas stage to continuous development – including daily communication with product stakeholders. Beyond the product mapping, user-testing, prototyping, workshops, I also lead the frontend development of production code.'
              items={involvement} />
          </Column>
        </Container>
        <hr />
        <Media
          url='../images/work/nucleus/feature.jpg'
          alt='Pearson Education Course shown on multiple devices'
          gradient='true'
          type='background'
          color='nucleus' />
        <Container>
          <Column
            width='third'
            headline='User-centered design for a global audience. Built up from an MVP into a product.' />
          <Column
            width='twoThird'
            content={DesignContent} />
          <Column width='full'>
            <Media
              position='marginBottomNegative'
              url='../images/work/nucleus/devices.png'
              alt='Intranet shown on multiple devices' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='Unifiying communication into one central system.'>
          </Column>
          <Column
            width='twoThird'
            content={SystemContent} />
          <Column width='full'>
            <Media
              media='image'
              url='../images/work/nucleus/components.png'
              alt='Intranet is made up of many different components' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='A brand that communicates a new direction.' />
          <Column
            width='twoThird'
            content={BrandContent}>
            <Media
              media='image'
              type='logo'
              url='../images/work/nucleus/logo.svg'
              alt='Nucleus logo in monotone' />
          </Column>
        </Container>
      </div>
    )
  }
}

export default Nucleus