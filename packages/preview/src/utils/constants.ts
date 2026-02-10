export const BRAND_TITLE = "React Icons v4.1.0 (all-files)";
export const BRAND_TITLE_MONO = "react-icons";
export const BRAND_DESCRIPTION =
  "React Icons v4.1.0 (all-files) build for projects that need per-file imports (e.g. older bundlers / Next.js setups).";
export const BRAND_KEYWORDS =
  "React, Icons, Tree Shaking, SVG, 4.1.0, all-files, @react-icons/all-files";

export const HOME_USAGE = `
import { FaBeer } from 'react-icons/fa';

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}`;

export const HOME_USAGE_ALL = `
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}`;
