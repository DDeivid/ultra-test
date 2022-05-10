export interface GiphyApiResponse {
    data: Array<any>,
    pagination: GiphyApiPagination
}

export interface GiphyApiPagination {
    total_count: number,
    count: number,
    offset: number,
}

export interface GiphyImage {
    title: string,
    url: string,
    thumbnailUrl: string,
    giphyUrl: string,
}
