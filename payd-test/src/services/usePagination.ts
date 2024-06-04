export function usePagination(currentPage: number, postsPerPage: number){
    const lastIndex = currentPage * postsPerPage;
    const firstIndex = lastIndex - postsPerPage;

    return { firstIndex, lastIndex }
}