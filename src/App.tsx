import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "./components/ui/pagination";
import { Button } from "./components/ui/button";
import axios from "axios";

interface newsItem {
  author: string;
  urlToImage: string;
  publishedAt: string;
  url: string;
  title: string;
  description: string;
}

const App = () => {
  const [news, setNews] = useState<newsItem[]>([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=ethiopia&page=${page}&pageSize=25&sortBy=relevancy&apiKey=1ac2b18282e24c24bcbe3ed000697406`
      )
      .then((response) => {
        setNews(response.data.articles);
      });
  }, [page]);
  return (
    <div className="m-5">
      <p className="text-center font-bold text-4xl m-5">Popular News</p>
      <div className="grid grid-cols-1 gap-5">
        {news.map((item, index) => (
          <div className="flex items-center gap-5" key={index}>
            <img
              src={item.urlToImage || "https://placehold.co/600x400?text=NEWS"}
              alt="News Image"
              className="rounded-md w-1/4"
            />
            <div className="">
              <a
                href={item.url}
                target="_blank"
                className="hover:underline active:underline font-bold text-xl"
              >
                {item.title}
              </a>
              <p className="mt-2">{item.description}</p>
              <p className="text-sm font-bold text-yellow-400 mt-2">
                {item.author}
              </p>
              <p className="text-xs font-bold text-yellow-200">
                {item.publishedAt.slice(0, 10)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center p-5">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button
                className="cursor-pointer"
                variant="outline"
                onClick={() => setPage(1)}
              >
                1
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button
                className="cursor-pointer"
                variant="outline"
                onClick={() => setPage(2)}
              >
                2
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button
                className="cursor-pointer"
                variant="outline"
                onClick={() => setPage(3)}
              >
                3
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button
                className="cursor-pointer"
                variant="outline"
                onClick={() => setPage(4)}
              >
                4
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <p className="text-xs text-center font-bold">Abyi Hailu &copy; 2025</p>
    </div>
  );
};

export default App;
