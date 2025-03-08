import Link from "next/link";
import styled from "styled-components";

const LiWrapper = styled.li`
  list-style-type: none;
  &:hover {
    opacity: 0.6;
  }
  color: white;
`;

const LiStyle = ({ href, section }: { href: string; section: string }) => {
  return (
    <LiWrapper>
      <Link href={href} passHref>
        {section}
      </Link>
    </LiWrapper>
  );
};

export default LiStyle;
