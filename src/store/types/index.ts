type Cat = {
    breeds: [],
    id: string,
    url: string,
    width: number,
    height: number,
}

type State = {
    cats: Cat[],
    limit: number,
    totalPages: number
    page: number,
    isLoaded : boolean
}

export {State, Cat}