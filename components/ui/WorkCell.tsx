import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const WorkCellWrapper = styled.div`
  margin: auto;
  width: 100%;
  height: 300px;
  padding: 10px;
  overflow: hidden;

  @media (max-width: 639px) {
    width: 300px;
  }
  &:hover {
    .image-overlay {
      transform: translateX(0);
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
`;

const WorkCell = ({
  link,
  fileName,
  title,
}: {
  link: string;
  fileName: string;
  title: string;
}) => {
  return (
    // <div className="relative mx-auto w-full h-[300px] p-10">
    //   <Link href={`${link}`}>
    // <Image
    //   src={`/works/${fileName}`}
    //   alt={`${fileName}`}
    //   width={300}
    //   height={225}
    //   style={{ objectFit: "cover" }}
    //   className="mx-auto hover:opacity-40 cursor-pointer"
    // />
    //   </Link>
    // </div>
    <WorkCellWrapper>
      <Link href={`${link}`}>
        <ImageWrapper>
          <Image
            src={`/works/${fileName}`}
            alt={`${fileName}`}
            width={300}
            height={225}
            style={{ objectFit: "cover" }}
            className="mx-auto hover:opacity-40 cursor-pointer"
          />
          <ImageOverlay className="image-overlay">
            <span>{title}</span>
          </ImageOverlay>
        </ImageWrapper>
      </Link>
    </WorkCellWrapper>
  );
};

export default WorkCell;
