// // const { User, Cart, Category, Item, CartItem } = require('../../models');
// // const router = require('express').Router();
// const fetch = require("node-fetch");

// var fetchSidebar =  async() => {
//     console.log('in sidebar')
//     // console.log(req.session.user_id)
// //     fetch(`/api/sidebar/${req.session.user_id}`)
// //     .then(res => res.json())
// //     .then(json => {
// //         console.log(json);
// // })
//         // const getSidebarData = await fetch(`/api/sidebar/${req.session.user_id}`,{
//         //     method: 'GET',
//         //     body: JSON.stringify({ email, password }),
//         //     headers: { 'Content-Type': 'application/json' },
//         // })
//         console.log('getSidebarData')
//         console.log(getSidebarData)
//         // if(sidebarData !== null){
//         //     var sidebar = sidebarData.get({ plain: true })
//         // }else {
//         //     sidebar = {
//         //         "user_id": req.session.user_id,
//         //         "completed": false,
//         //         "itemIds": [],
//         //     }
//         // }
//         // console.log('sidebar')
//         // console.log(sidebar)
// }

// // fetchSidebar()
// // module.exports = fetchSidebar, router, fetch
// var sidebar = document.querySelector('#sidebar')
// sidebar.addEventListener('click', fetchSidebar)