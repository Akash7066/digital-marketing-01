// /** @jsx jsx */
// import { jsx } from 'theme-ui';
// import { Container, Grid } from 'theme-ui';
// import SectionHeader from 'components/section-header';
// import FeatureCard from 'components/feature-card.js';
// import Performance from 'assets/feature/performance.svg';
// import Partnership from 'assets/feature/partnership.svg';
// import Subscription from 'assets/feature/subscription.svg';
// import Support from 'assets/feature/support.svg';

// const data = [
//   {
//     id: 1,
//     imgSrc: Performance,
//     altText: 'Fast Performance',
//     title: 'Fast Performance',
//     text:
//       'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.',
//   },
//   {
//     id: 2,
//     imgSrc: Partnership,
//     altText: 'Pro Subscription',
//     title: 'Pro Subscription',
//     text:
//       'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
//   },
//   {
//     id: 3,
//     imgSrc: Subscription,
//     altText: 'Partnership deal',
//     title: 'Partnership deal',
//     text:
//       'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.',
//   },
//   {
//     id: 4,
//     imgSrc: Support,
//     altText: 'Customer Support',
//     title: 'Customer Support',
//     text:
//       'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
//   },
// ];

// export default function Feature() {
//   return (
//     <section sx={{ variant: 'section.feature' }}>
//       <Container>
//         <SectionHeader
//           slogan="Quality features"
//           title="Amazing useful features"
//         />

//         <Grid sx={styles.grid}>
//           {data.map((item) => (
//             <FeatureCard
//               key={item.id}
//               src={item.imgSrc}
//               alt={item.altText}
//               title={item.title}
//               text={item.text}
//             />
//           ))}
//         </Grid>
//       </Container>
//     </section>
//   );
// }

// const styles = {
//   grid: {
//     pt: [0, null, null, null, null, null, 2],
//     px: [5, 6, 0, null, 7, 8, 7],
//     gridGap: [
//       '40px 0',
//       null,
//       '45px 30px',
//       null,
//       '60px 50px',
//       '70px 50px',
//       null,
//       '80px 90px',
//     ],
//     gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
//   },
// };

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import Image from "components/image";
import clients from "assets/imgs/clients.png";

const Clients = () => {
  return (
    <section id="our-clients" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Learn 40+ Digital Marketing Tools          "
          description="We will help you get familiar with 40+leading tools in the industry used by digital marketing experts and agencies across the country. These tools help you gain an analytical edge and automation power to define your brand's journey.
          "
          learnMore="Explore Details"
        />
        <Flex as="figure" sx={styles.illustration}>
          <Image src={clients} alt="clients" />
        </Flex>
      </Container>
    </section>
  );
};

export default Clients;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [6, null, null, null, 10, 14],
  },
  heading: {
    h3: {
      fontSize: [4, null, null, 6, 9],
      lineHeight: 1.5,
      mb: 3,
    },
  },
  illustration: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: [3, null, null, 0],
  },
};
