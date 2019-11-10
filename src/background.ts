console.log('background js');
import {Word} from './app/interfaces/word';
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.webNavigation.onCompleted.addListener(() => {
//     chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
//       chrome.pageAction.show(id);
//     });
//   }, { url: [{ urlMatches: 'google.com' }] });
// });


var contextMenuItem = {
  "id": "remember",
  "title": "Reminder",
  "contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem, ()=> {
  console.log('Context menu create');
});

chrome.contextMenus.onClicked.addListener((clickData) => {
  console.log('Add listener ', clickData.menuItemId);
  let chStorage = chrome.storage.sync;
  console.log(chStorage);
  // new word
  let name : string = clickData.selectionText;
  let word : Word = {
    name: name,
    repeat_mention: 0,
    need_repeat: 10,
    date: new Date()
  };
  // need to add observabel for the update list
  chStorage.set({name, word}, ()=>{
    console.log('Save word: ', word);
  });
  console.log(clickData.selectionText);
});

// function isInt(value) {
//     return !isNaN(value) &&
//     parseInt(Number(value)) == value &&
//     !isNaN(parseInt(value, 10));
// }

// chrome.contextMenus.onClicked.addListener((clickData)=> {
//     console.log('Add listener');
//     if (clickData.menuItemId == "spendMoney" && clickData.selectionText){
//         if (isInt(clickData.selectionText)) {
//             chrome.storage.sync.get(['total', 'limit'], function(budget){
//                 let newTotal = 0;
//                 if (budget.total) {
//                     newTotal+=parseInt(budget.total);
//                 }
//                 newTotal += parseInt(clickData.selectionText);
//             });
//         }
//     }

// });
