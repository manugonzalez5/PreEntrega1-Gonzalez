export const usePaginate = (array) => {
    //array de 100
    //siempre se corte de 10 a 10
    // 10 pags
    const [currentPage, setCurrentPage] = useState(1);
    let totalPages = Math.ceil(array.length / 10);
    const arrayCortado = array.slice((currentPage - 1) * 10, currentPage * 10);
    //                                     desde                   hasta

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    return { arrayCortado, currentPage, totalPages, nextPage, prevPage };
}
