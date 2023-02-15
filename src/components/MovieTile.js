import styled from "styled-components";
import Image from "next/image";

const Tile = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    color: white;
    border-radius: 25px 0px 0px 0px;
    overflow: hidden;
    gap: 10px;
    box-shadow: -3px -3px 10px rgba(100,100,100,0.7);

    &:hover {
        cursor: pointer;
    }
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1.2rem;
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