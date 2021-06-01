import React from "react";

import { NewsDiv,NewsTitle, NewsBody } from "./styles/News";

const News = () => {
  return (
    <>
      <NewsDiv>
        <NewsTitle>
          <h2>NEWS & INFORMATION</h2>
        </NewsTitle>
        <NewsBody>
          
            <h5>* We are open again on 11/06/2020</h5>
            <h5>* Now you can call or text us at 512 454 0911</h5>
            <h5>* Have a question that you cannot find in FAQ? contact us :)</h5>
          
        </NewsBody>
      </NewsDiv>
    </>
  );
};

export default News;
