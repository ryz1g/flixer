import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { colors } from "@/constants";
import { useRouter } from "next/router";

const WrapperTile = styled.div`
  position: relative;
  width: 120px;
  height: 180px;
`;

const Tile = styled.div`
  /* position: absolute; */
  display: flex;
  flex-direction: column; */
  color: ${colors.hoverTileText};
  border-radius: 5px 5px 5px 5px;
  overflow: hidden;
  // gap: 10px;

  &:hover {
    cursor: pointer;
    z-index: 20;
    box-shadow: 0px 0px 10px ${colors.theme1Highlight};
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 800;
  padding: 10px;
`;

function MovieTile({
  id,
  url,
  title
}) {
  const [overlay, setOverlay] = useState(false);
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/movie/${id}`);
  };

  return (
    <WrapperTile overlay={overlay}>
      <Tile
        onMouseEnter={() => setOverlay(!overlay)}
        onMouseLeave={() => setOverlay(!overlay)}
        onClick={() => handleClick(id)}
        overlay={overlay}
      >
        <Image
          src={url}
          alt="Not Available!"
          width="100"
          height="150"
        />
      </Tile>
    </WrapperTile>
  );
}

export default MovieTile;
