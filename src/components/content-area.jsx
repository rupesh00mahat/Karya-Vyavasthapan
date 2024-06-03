import React from "react";

import ContentAreaHeader from "./content-area-header";
import ContentMainArea from "./content-main-area";

function ContentArea(props) {
  return (
    <div id="content-area">
     <ContentAreaHeader/>
     <ContentMainArea/>
      
    </div>
  );
}

export default ContentArea;
