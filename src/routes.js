import Accueil from "./component/pages/Accueil.vue";
import Slide from "./component/pages/Slide.vue";
import Calendrier from "./component/pages/Calendrier.vue";
import Archives from "./component/pages/Archives.vue";
import Profil from "./component/pages/Profil.vue";
import Aide from "./component/pages/Aide.vue";


export const routes = [
  {
    path:"/",
    name:"Accueil",
    component: Accueil
  },

  {
    path:"/Slide",
    name:"Slide",
    component: Slide
  },

  {
    path:"/Calendrier",
    name:"Calendrier",
    component: Calendrier
  },

  {
    path:"/Archives",
    name:"Archives",
    component: Archives
  },

  {
    path:"/Profil",
    name:"Profil",
    component: Profil
  },

  {
    path:"/Aide",
    name:"Aide",
    component: Aide
  },

]
