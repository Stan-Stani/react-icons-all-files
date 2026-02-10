import CodeBlock from "@components/@core/code-block";
import Container from "@components/@core/container";
import { BRAND_TITLE, HOME_USAGE_ALL } from "@utils/constants";

export default function HomePage() {
  return (
    <Container title={BRAND_TITLE}>
      <p>
        This site documents the <strong>React Icons v4.1.0</strong>{" "}
        <strong>@react-icons/all-files</strong> build (per-file imports), which
        is useful for projects stuck on older tooling (for example, some Next.js
        setups).
      </p>

      <h3>Usage</h3>
      <CodeBlock code={HOME_USAGE_ALL} />

      <h2>Original Repo</h2>
      <p>
        <a href="https://github.com/react-icons/react-icons">
          https://github.com/react-icons/react-icons
        </a>
      </p>
    </Container>
  );
}
