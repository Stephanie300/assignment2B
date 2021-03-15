import api from './api'
import dataFetcher from '../utils/dataFetcher'
import EventManager from './events/EventManager'
import SideBar from './sidebar';
import DisplayPanel from './display-panel'  //this assumes the index file in this folder
// if you dont give a specific file, it assumes the index in that folder



 
const displayPanel = DisplayPanel();
const sideBar = SideBar()
const eventManager = EventManager.getInstance();




eventManager.handle.addEventListener('updateDisplay', (e)=>{
      // will be run after the app init
      // the eventmanager has the data for the sidebar and the display
      // a custom event has been dispatched - this custom event is called updateDisplay
      // you can add data to a custom event
      displayPanel.updateDisplay(e.detail);
})



 

const appInit = async function (){
       const departmentData = await dataFetcher.getRequest(api.getAllDepartments)
       const defaultWidgitData = await dataFetcher.getRequest(api.getDepartment("training"))
       console.log(departmentData)
       sideBar.init(departmentData)
       displayPanel.init(defaultWidgitData)
}

appInit()
 


 
 