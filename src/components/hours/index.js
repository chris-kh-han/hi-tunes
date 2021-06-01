import React from 'react';

import {HoursDiv, HoursTitle, OpenHours, Rules} from './styles/BusinessHours'

const Hours = () => {
  return (
    <>
      <HoursDiv>
        <HoursTitle>
          <h2>BUSINESS HOURS</h2>
        </HoursTitle>
        <OpenHours>
          <h5>Mon. Closed</h5>
          <h5>Tue. 6 pm - 12 am</h5>
          <h5>Wed. 6 pm - 12 am</h5>
          <h5>Thur. 6 pm - 12 am</h5>
          <h5>Fri. 6 pm - 2 am</h5>
          <h5>Sat. 6 pm - 2 am</h5>
          <h5>Sun. 6 pm - 12 am</h5>
        </OpenHours>
        <Rules>
          <h6>
            *Customers must be in the store at least 1.5 hour prior to the
            closing time.
          </h6>
          <h6>*Same day reservation cut-off time is 10 P.M.</h6>
        </Rules>
      </HoursDiv>
    </>
  );
};

export default Hours;
