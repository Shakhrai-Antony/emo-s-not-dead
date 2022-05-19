import {AppStateType} from "./Store";

export const getGoods = (state: AppStateType) => {
    return state.goodsPage.goods
}
export const getGoodsForCarousel = (state: AppStateType) => {
    return state.goodsPage.goodsForCarousel
}
export const getGirlsGoods = (state: AppStateType) => {
    return state.goodsPage.goodsForLadies
}
export const getFemaleGoodsForCarousel = (state: AppStateType) => {
    return state.goodsPage.femaleGoodsForCarousel
}
export const getCoffeeGoods = (state: AppStateType) => {
    return state.goodsPage.coffeeGoods
}
export const getVideos = (state: AppStateType) => {
    return state.goodsPage.videosSection
}
export const getTotalItemsForMerchSection = (state: AppStateType) => {
    return state.goodsPage.merchSection
}
export const getTotalItemsForMerchSectionLength = (state: AppStateType) => {
    return state.goodsPage.totalItemsCount
}
export const getCurrentPage = (state:AppStateType) => {
    return state.goodsPage.currentPage
}
export const getWatchList = (state:AppStateType) => {
    return state.goodsPage.watchSection
}
export const getCollectionForWatchSection = (state: AppStateType) => {
    return state.goodsPage.collectionForWatchSection
}