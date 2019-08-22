import React from "react";

const EditComponentPage = props => {
  return <div>Editing the expense with id of {props.match.params.id}</div>;
};

export default EditComponentPage;
