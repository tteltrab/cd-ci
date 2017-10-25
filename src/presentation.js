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
              IBM Senior Software Development Engineer / Tech Lead
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
            Working with a team while also ensuring your code is up-to-date and
            working can be challenging.
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
        <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            Continuous Integration
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" textAlign="left">
            Imagine this scenario:
          </Heading>
          <List padding="0 0 0 40">
            <ListItem>You're working with a team.</ListItem>
            <br />
            <ListItem>
              You're working on separate pieces of the application, and each
              have most of your code ready.
            </ListItem>
            <br />
            <ListItem>Your project deadline is next week.</ListItem>
            <br />
            <ListItem>
              You haven't brought your code together yet, or tried hosting it.
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image
            src="http://static1.squarespace.com/static/5539b16ae4b09e35ffe0d93c/55c27624e4b0db8468d6a825/57c73fd0d2b8574ea2f13334/1472679095663/59631492.jpg?format=1000w"
            alt="arnold saying ship it"
            width={500}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image
            src="http://i.memecaptain.com/gend_images/jevOcA.gif"
            alt="ship launch going horribly"
            width={500}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="primary">
          <Heading size={6} caps>
            You're in for a baaad week.{' '}
            <span role="img" aria-label="disappointed face">
              😞
            </span>
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" textAlign="left">
            The Problems:
          </Heading>
          <List padding="0 0 0 40">
            <ListItem>
              Integrating code is difficult and time consuming.
            </ListItem>
            <br />
            <ListItem>Additional Bugs Introduced</ListItem>
            <br />
            <ListItem>Source control conflicts to resolve.</ListItem>
            <br />
            <ListItem>Hosting can be error prone and time consuming.</ListItem>
          </List>
          <Text textAlign="left">
            So you have a lot to do (and probably fix), and very little time.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="primary">
          <Heading size={6}>So how can we avoid this?</Heading>
          <br />
          <Appear>
            <Heading size={4} textColor="tertiary">
              <strong>Continuous Integration</strong>
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" textAlign="left">
            Continuous Integration
          </Heading>
          <br />
          <Text textAlign="left">
            In short, this is the process of <strong>integrating</strong> your
            code into a known working code base often.
          </Text>
          <List padding="0 0 0 40">
            <ListItem>No building features in isolation</ListItem>
            <br />
            <ListItem>No waiting until the end to combine code</ListItem>
          </List>
          <Text textAlign="left">
            The key is for developers to keep changes small, and to check them
            into a main branch of a shared repository early and often.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Text textAlign="left">
            This doesn't help quality in and of itself, but helps reduce waste.
          </Text>
          <List padding="0 0 0 40">
            <ListItem>Accelerates Collaborative Development</ListItem>
            <br />
            <ListItem>Reduces "rework" and duplicate work</ListItem>
            <br />
            <ListItem>Minimizes cost of integration</ListItem>
            <br />
            <ListItem>Increases visibility</ListItem>
            <br />
            <ListItem>
              Not rushing to fix bugs at the end, but iterating on them
              throughout.
            </ListItem>
            <br />
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6}>Best Practices</Heading>
          <List padding="0 0 0 40">
            <ListItem>
              Regularly contribute code to the shared repository
            </ListItem>
            <br />
            <ListItem>
              Regularly refresh local copy with shared repository copy
            </ListItem>
            <br />
            <ListItem>More to come...</ListItem>
            <br />
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Text>
            In short, everyone treats the main branch as the "working product",
            and contributes to that.
          </Text>
          <br />
          <Image
            alt="main repository image"
            src="http://today.lbl.gov/wp-content/uploads/sites/3/2015/02/git-workflow-svn.png"
          />
          <Text>Integrating with every (hopefully small) contribution.</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6}>So let's do it!</Heading>
          <Image
            alt="two people one keyboard"
            src="https://media.giphy.com/media/yUlFNRDWVfxCM/giphy.gif"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            Continuous Delivery and Deployment
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Text textAlign="left">
            Continuous deployment is, in short, automation of the software
            delivery process.
          </Text>
          <br />
          <List padding="0 0 0 40">
            <ListItem>Every time you deliver code, you deploy it</ListItem>
            <br />
            <ListItem>
              Tools and infrastructure are used to help do this{' '}
              <em>automatically</em>
            </ListItem>
            <br />
            <ListItem>
              There are many such tools, but the tool we'll be looking at today
              is TravisCI.
            </ListItem>
          </List>
          <Image
            alt="travis CI logo"
            src="https://travis-ci.com/images/logos/TravisCI-Mascot-1.svg"
            height={200}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Text>CD: Delivery vs. Deployment?</Text>
          <List padding="0 0 0 40">
            <ListItem>
              Can refer to either, ideally in most cases deployment.
            </ListItem>
            <ListItem>
              Deployment automates the step of moving code to production.
            </ListItem>
          </List>
          <Image
            alt="continuous delivery vs. deployment breakdown"
            src="https://wac-cdn.atlassian.com/dam/jcr:84fa9fcf-4ad0-4417-96d3-e5d3387d7f81/CDmicro-600x338-retina2x-B_cicds.png?cdnVersion=ht"
            height={400}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Text>Benefits</Text>
          <List padding="0 0 0 40">
            <ListItem>Less error prone</ListItem>
            <ListItem>Saves Developer Time</ListItem>
            <ListItem>Reduces lead time (time to delivery)</ListItem>
          </List>
          <Text textAlign="left">
            With reduced lead time, you benefit through earlier ROI, cheaper
            path to production, and quicker client feedback.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            Thank you!<br />
            <br />Incoming Resources...
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={3}>
            <span role="img" aria-label="thumbs-up">
              👍
            </span>
          </Heading>
          <List>
            <ListItem textSize="20px">
              Github Repo:{' '}
              <Link
                textColor="#03A9FC"
                href="https://github.com/tteltrab/testing-cdci-examples"
              >
                https://github.com/tteltrab/testing-cdci-examples
              </Link>
            </ListItem>
            <ListItem textSize="20px">
              Agile Alliance Continuous Deployment:{' '}
              <Link
                textColor="#03A9FC"
                href="https://www.agilealliance.org/glossary/continuous-deployment/"
              >
                https://www.agilealliance.org/glossary/continuous-deployment/
              </Link>
            </ListItem>
            <ListItem textSize="20px">
              DigitalOcean CI/CD Intro:{' '}
              <Link
                textColor="#03A9FC"
                href="https://www.digitalocean.com/community/tutorials/an-introduction-to-continuous-integration-delivery-and-deployment"
              >
                https://www.digitalocean.com/community/tutorials/an-introduction-to-continuous-integration-delivery-and-deployment
              </Link>
            </ListItem>
          </List>
          <Text textColor="primary">Feel free to reach out!</Text>
          <List>
            <ListItem textSize="20px">
              Me on GitHub:{' '}
              <Link textColor="#03A9FC" href="https://github.com/tteltrab">
                https://github.com/tteltrab
              </Link>
            </ListItem>
            <ListItem textSize="20px">
              Me on LinkedIn:{' '}
              <Link
                textColor="#03A9FC"
                href="https://www.linkedin.com/in/nick-bartlett/"
              >
                https://www.linkedin.com/in/nick-bartlett/
              </Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
