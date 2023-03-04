import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { colors } from "@/constants";
import { useRouter } from "next/router";

const WrapperRibbon = styled.div`
  position: relative;
  width: 100%;
  min-width: 635px;
  height: 90px;
  padding-right: 20px;
`;

const RibbonGrowAnimation = keyframes`
    0% {

    }
    100% {
        transform: scale(1.04);
    }
`;

const Ribbon = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  color: ${colors.hoverTileText};
  border-radius: 25px 5px 25px 25px;
  overflow: hidden;
  gap: 10px;

  &:hover {
    cursor: pointer;
    z-index: 20;
    box-shadow: 0px 0px 50px ${colors.theme1Highlight};
    animation: ${RibbonGrowAnimation} 0.15s ease-in-out;
    animation-fill-mode: forwards;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 800;
  padding: 10px;
`;

const InfoDiv = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.theme1};

  & > span {
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

const MainContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const RatingDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  color: ${colors.ratings};
  padding-right: 5px;
`;

function MovieRibbon({
  id,
  rank,
  currentPage,
  url,
  title,
  release_date,
  vote_average,
  vote_count,
  genres,
}) {
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/movie/${id}`);
  };

  return (
    <WrapperRibbon>
      <Ribbon onClick={() => handleClick(id)}>
        <MainContentDiv>
          <Title>{(currentPage - 1) * 20 + rank}</Title>
          <Image src={url} alt="Not Available!" width="60" height="90" />
          <Title>
            <div>{title}</div>
            <InfoDiv>
              {release_date.slice(0, 4) + " |"}
              {genres.map((genre, index) => {
                return (
                  <span key={genre}>{`${genre}${
                    index !== genres.length - 1 ? "," : ""
                  }`}</span>
                );
              })}
            </InfoDiv>
          </Title>
        </MainContentDiv>
        <RatingDiv>
          {vote_average + " / 10 "}
          {`(${vote_count} votes)`}
        </RatingDiv>
      </Ribbon>
    </WrapperRibbon>
  );
}

export default MovieRibbon;
