import React from 'react';
import Elevate from '../Elevent/Elevate';
import Section from '../../Home/Section/Section';
import ExtraSection from '../../Shared/ExtraSection/ExtraSection';
import UnlockValue from '../UnlockValue/UnlockValue';
import Management from '../Managment/Management';
import SmartDecision from '../SmartDecision/SmartDecision';

const Services = () => {
     return (
          <div>
                <Elevate></Elevate>
                <Section></Section>
                <UnlockValue></UnlockValue>
                <Management></Management>
                <SmartDecision></SmartDecision>
                <ExtraSection></ExtraSection>
          </div>
     );
};

export default Services;