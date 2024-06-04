import { useDispatch, useSelector } from "react-redux";
import { updatePageNumber } from "../../slices/pagination";
import { AppDispatch, RootState } from "../../../store";

export default function Pagination() {
  const dispatch: AppDispatch = useDispatch();
  const { postsPerPage, totalPosts } = useSelector(
    (store: RootState) => store.paginate
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex items-center justify-end border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          {pageNumbers.map((pageno) => (
            <a
              key={pageno}
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center rounded-l-md  px-4 py-2 text-sm font-semibold  border"
              onClick={() => dispatch(updatePageNumber(pageno))}
            >
              {pageno}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
