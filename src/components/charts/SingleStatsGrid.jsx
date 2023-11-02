import React from "react";
import SingleStat from "./SingleStat";

const SingleStatsList = ({ size, data = [] }) => {
  return data.map(({ title, description, value, unit }) => (
    <SingleStat
      unit={unit}
      value={value}
      size={size}
      title={title}
      description={description}
    />
  ));
};

export default SingleStatsList;
