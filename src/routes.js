import Accueil from "./components/pages/Accueil.vue";
import Slide from "./components/pages/Slide.vue";
import Calendrier from "./components/pages/Calendrier.vue";
import Archives from "./components/pages/Archives.vue";
import Profil from "./components/pages/Profil.vue";
import Aide from "./components/pages/Aide.vue";


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
