import toast from "cogo-toast";
import copy from "copy-to-clipboard";
import React from "react";

function Icon({ icon, name, iconId }) {
  const copyToClipboard = () => {
    const importCode = iconId
      ? `import { ${name} } from "@react-icons/all-files/${iconId}/${name}";`
      : name;

    copy(importCode);
    toast.success(`Copied import for '${name}' to clipboard`, {
      position: "bottom-center",
    });
  };

  return (
    <div className="item" tabIndex={0} onClick={copyToClipboard} key={name}>
      <div className="icon h2">{typeof icon === "function" && icon()}</div>
      <div className="name">{name}</div>
    </div>
  );
}

export default Icon;
