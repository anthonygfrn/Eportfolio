import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Anthony Gufron <br />
        Online Portfolio
      </SectionTitle>
      <SectionText> 
      I am a student at Universiti Teknologi Malaysia. I am majoring in Computer Science (Software Engineering).
      </SectionText>
      <Button onClick={() => window.location = 'https://imgur.com/p6BAEz9'}>Curriculum Vitae</Button>
    </LeftSection>

  </Section>
);

export default Hero;