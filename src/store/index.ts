import { createStore } from 'vuex'
import { allCatsModule } from '@/store/modules/allCatsModule'
import { myCatsModule } from '@/store/modules/myCatsModule'

export default createStore({
  modules: {
    allCats: allCatsModule,
    myCats: myCatsModule
  }
})
