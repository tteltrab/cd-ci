// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            CI/CD Techniques
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={4} fit bold>
            Theory, Process, Tools, and Testing
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            Who is this person and why is he here?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Previous Role
          </Heading>
          <List>
            <ListItem>
              IBM Senior Software Development Engineer/Tech Lead
            </ListItem>
            <br />
            <ListItem>
              Built the{' '}
              <Link
                href="https://www.ibm.com/us-en/marketplace"
                target="_blank"
              >
                IBM Marketplace
              </Link>{' '}
              from the ground up.
            </ListItem>
          </List>
          <Image
            src="https://dr5mo5s7lqrtc.cloudfront.net/items/0j1A3A3G3a2t3L3d0I2P/7E66E9C0-B9BF-473F-AF9A-B864890AF85D.png"
            alt="marketplace-home"
            width={500}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Text>Instructional Lead for the Coding Boot Camp at UNC-CH</Text>
          <br />
          <Image
            src="https://media.licdn.com/media-proxy/ext?w=800&h=800&hash=7fFdO6BAwYKj8NLvnzEv1UM4AS0%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6nlh8Tw1It6a2FowGz60oISIfYC2G8G2f1spyfNT-tdoDSeLKhpEtOdSkBkBJkcrG-GGGiSp7qbtiSH5UizPG3J83icFRXeh0miE4b290UIw5h5rDgCvnxPX8LgM9ZSw2eB4HtbGAyGgIbr-CfHLL-C20gnASvVfnXDc0QWfoywtdQzVZNktXSG8Bnyd9a2mNKkU_spY3PDBQ82Y-bOnu3AVViU2OSFeVp7ZXS-Qijr1bGj06HjaWkDo32H_Ui5mWivsLBTg25olowkkkBygNAktJ7EUTgpu8R4m6WFc4keiyE4vvySmmX1bQS3D5Os5aRTjOMQiprml1JSrbuk0Y7KZTK2QmJ2DRLLvh_PQghhuetT92DjG6KUEJoOEOKah55nu-h75-zB_9gFKlytvh7cuVrbzMuVbNJYzunq-81JConspwdRFniICuMyPTPX4kYSL5Ucjd8Vg"
            alt="coding bootcamp logo"
            width={500}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Text>Sr. Director of Curriculum for Trilogy Education Services</Text>
          <br />
          <Image
            alt="university-partners"
            src="https://trilogyeduinc.wpengine.com/wp-content/uploads/2016/12/university_logos_desktop-1.svg"
            width={500}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Text>
            UNC Alumnus - MS in Computer Science, BS in Computer Science and
            Mathematics
          </Text>
          <br />
          {/* <Image alt="unc logo" src="https://pbs.twimg.com/profile_images/793501338831298560/GH42p_8e_400x400.jpg" height={250} /> */}
          <Image
            alt="degree"
            src="https://cl.ly/2o2A2h1N3I11/Image%202017-10-25%20at%207.54.51%20AM.png"
            height={250}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Why am I here?
          </Heading>
          <Appear>
            <List>
              <ListItem>
                <strong>Because my problems are the same as yours.</strong>
              </ListItem>
              <br />
              <ListItem>
                I've worked with many teams building different products and
                content from the ground up.
              </ListItem>
              <br />
            </List>
          </Appear>
        </Slide>
        <Slide>
          <Text textAlign="left">
            Everyone wants to be able to effectively build a product:
          </Text>
          <List padding="0 0 40 0">
            <ListItem>Quickly</ListItem>
            <ListItem>With as few bugs as possible</ListItem>
            <ListItem>With a team</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Text>Who here has started writing code for your project?</Text>
          <br />
          <Appear>
            <Text>
              Does <strong>collaboration</strong> with your team members go
              smoothly?
            </Text>
          </Appear>
          <br />
          <Appear>
            <Text>
              How about <strong>deploying</strong> your application?
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Text>
            Working on a team and ensuring your code is consistent, working, and
            up-to-date can be very difficult.
          </Text>
          <br />
          <Image
            href="team"
            src="http://www.softcodeit.com/images/scit/team.png"
            width={500}
          />
          <br />
          <Text>
            Fortunately, there are tools and techniques that help to collaborate
            and build software effectively.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={1}>
            <span role="img" aria-label="thumbs-up">
              👍
            </span>
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/tteltrab/testing-cdci-examples">
                Github Repo
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.agilealliance.org/glossary/continuous-deployment/">
                Agile Alliance Continuous Deployment
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.digitalocean.com/community/tutorials/an-introduction-to-continuous-integration-delivery-and-deployment">
                DigitalOcean CI/CD Intro
              </Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
