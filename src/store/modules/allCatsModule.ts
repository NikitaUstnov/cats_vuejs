import axios from "axios"
import {State, Cat} from "@/store/types"

export const allCatsModule = {
   namespaced: true,
    state: () => ({
        cats: [],
        limit: 10,
        totalPages: 0,
        page: 1,
        isLoaded: false,
    }),
    getters: {
        getCats(state: State) {
            return state.cats
        },
        isLoadedState(state: State) {
            return state.isLoaded
        }
    },
    mutations: {
        setCats(state: State, cats: Cat[]){
          state.cats = cats;
        },
        setTotalPages(state: State, pages: number) {
            state.totalPages = pages;
        },
        setPage(state: State, page: number) {
            state.page = page;
        },
        setLoaded(state: State, value: boolean) {
            state.isLoaded = value;
        },
           resetPage(state: State) {
            state.page = 1
        }
    }, 
    actions: {
        async getAllCats({ state, commit }: { state: State, commit: any }): Promise<void> {
            try {
                if (state.totalPages === state.page) {
                    return
                }
                commit('setPage', state.page + 1)
                const urlAll: string = 'https://api.thecatapi.com/v1/images/search'
                axios.defaults.headers.common['x-api-key'] = process.env.VUE_APP_API_KEY
                let request = await axios.get(urlAll, {
                    params: {
                        limit: state.limit,
                        page: state.page
                    },
                    headers: {
                        'content-type': 'application/json',
                    }
                })
                let response = request

                commit("setTotalPages", response.headers["pagination-count"])
                commit("setCats", [...state.cats, ...response.data])
                commit("setLoaded", true)

            } catch (error) {
                console.log(error);
                 commit("setLoaded", true)
            }
        }
    },
}