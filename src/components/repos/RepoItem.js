import React from "react";

export const RepoItem = (props) => {
  const { name, url } = props.repo;
  return (
    <div className="card">
      <a href={url} target="_blank" rel="noreferrer">
        {name}
      </a>
    </div>
  );
};