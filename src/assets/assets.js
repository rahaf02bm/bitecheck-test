import logo_icon from './logo_icon.png'
import search_icon from './search_icon.png'
import header_icon from './header_icon.jpeg'
import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_stars from './rating_stars.png'
import profile_icon from './profile_icon.png'
import logout_icon from './logout_icon.png'
import ddlogo_icon from './ddlogo_icon.jpeg'
import bklogo_icon from './bklogo_icon.jpeg'
import phlogo_icon from './phlogo_icon.jpeg'
import food_1 from "./bklogo_icon.jpeg"
import food_2 from "./ddlogo_icon.jpeg"
import food_3 from "./phlogo_icon.jpeg"
export const assets = {
  logo_icon,
  header_icon,
  search_icon,
  rating_stars,
  add_icon_green,
  add_icon_white,
  remove_icon_red,
  app_store,
  play_store,
  linkedin_icon,
  facebook_icon,
  twitter_icon,
  cross_icon,
  selector_icon,
  profile_icon,
  logout_icon,
  ddlogo_icon,
  bklogo_icon,
  phlogo_icon,
}
export const menu_list = [
  {
    menu_name: "Burger King",
    menu_image: assets.bklogo_icon
  },
  {
    menu_name: "Dunkin Donuts",
    menu_image: assets.ddlogo_icon
  },
  {
    menu_name: "Pizza Hut",
    menu_image: assets.phlogo_icon
  }
]
export const food_list = [
    {
        _id: "1",
        name: "burger king",
        image: food_1,
        description: "Fast food restaurant",
        category: "burger"
    },
    {
        _id: "2",
        name: "dunkin donuts",
        image: food_2,
        description: "coffee and desserts",
        category: "cafe"
    }, {
        _id: "3",
        name: "pizza hut",
        image: food_3,
        description: "Italian restaurant",
        category: "Italian"
    }
  ]