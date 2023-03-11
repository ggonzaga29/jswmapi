interface ItemsInSet extends Array<Object> {

}

export default interface Item {
    id: string,
    itemsInSet: ItemsInSet[]
}