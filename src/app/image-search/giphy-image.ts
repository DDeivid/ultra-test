export interface GiphyApiResponse {
    data: Array<any>,
    pagination: any,
}

export interface GiphyImage {
    title: string,
    url: string,
    thumbnailUrl: string,
    giphyUrl: string,
}
