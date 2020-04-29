import React from "react";

const TagsList = ({ tags }) => {
  return (
    <div>
      {tags.map((tag) => (
        <code key={tag} className="mr-2">
          {tag}
        </code>
      ))}
    </div>
  );
};

export default TagsList;
