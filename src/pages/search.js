import styled from "styled-components";
import MovieGrid from "@/components/MovieGrid";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useState, useEffect } from "react";
import { colors } from "@/constants";
import { useRouter } from "next/router";
import PageNavigationBar from "@/components/PageNavigationBar";
import { getSearchResults } from "@/requests";

const WelcomeHeader = styled.div`
  font-size: 4rem;
  font-weight: 800;
  display: flex;
  justify-content: center;
  padding: 5px;
  color: ${colors.theme1};
`;

const ButtonRibbon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const router = useRouter();
  var { queryString, pageNum, adultContent } = router.query;
  pageNum = parseInt(pageNum);
  const [maxPages, setMaxPages] = useState(1);

  useEffect(() => {
    getSearchResults(queryString, pageNum, adultContent).then((result) => {
      setMovieList(result.results);
      setMaxPages(result.total_pages);
    });
  }, [pageNum]);

  return (
    <>
      {movieList.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <>
          <WelcomeHeader>{`Search Results on TMDB`}</WelcomeHeader>
          <MovieGrid movieList={movieList} />
          <ButtonRibbon>
            <PageNavigationBar
              baseUrl={"/search/"}
              currentPage={pageNum}
              maxPages={maxPages}
              queryObject={router.query}
            />
          </ButtonRibbon>
        </>
      )}
    </>
  );
}
