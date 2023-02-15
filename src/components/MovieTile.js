import styled from "styled-components";
import Image from "next/image";

const Tile = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    color: white;
    border-radius: 15px;
    overflow: hidden;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
`;

function MovieTile({url, title}) {
    return (
        <Tile>
            <Image src={url} alt="Not Available!" width="250" height="375"/>
            <Title>{title}</ Title>
        </Tile>
    );
}

export default MovieTile;