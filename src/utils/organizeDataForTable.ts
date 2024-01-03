import { TableHeader } from "../shared/Button/Table"

type indexedHeaders = {
    [key: string]: TableHeader
}

type OrganizedItem = {
    [key : string]: any
}

export default function organizeData(data: any[], headers: TableHeader[]): 
[OrganizedItem[], indexedHeaders] {
    const indexedHeaders: indexedHeaders = {}

    headers.forEach(header => {
        indexedHeaders[header.key] = {
            ...header,
        }
    })

    const headerKeysInOrder = Object.keys(indexedHeaders)

    const organizedData = data.map(item => {
        const organizedItem: OrganizedItem = {}

        headerKeysInOrder.forEach(key => {
            organizedItem[key] = item[key]            
        })

        organizedItem.$original = item

        return organizedItem
    })
    
    return [organizedData, indexedHeaders]
}
