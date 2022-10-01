import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import StudyItem from "../Components/StudyItem.js"
import Navbar from "../Components/Navbar"

export default function Home(props) {
  //set state using an array object for dynamic rendering of <StudyItem/>'s components
  const [studyItemComponent, setStudyItemComponent] = React.useState([{studyItem: ""}])

  //spread the existing array of numberStudyItems and add a new object with the matching key:value pairs
  const addStudyItem = () => {
    setStudyItemComponent([...studyItemComponent, {studyItem: ""}])
  }

  return (
    <div>
      <header>
        <Navbar />
      </header>

      
      {studyItemComponent.map((singleStudyItem, index) => ( //*look into the map feature*: for every studyItemComponent render a <div> with <StudyItem/> in it and add an index
      <div key={index}>
        <StudyItem index={index} studyItemComponent={studyItemComponent} setStudyItemComponent={setStudyItemComponent} />
      </div> // ^^ how to handle rendering the first study item without hardcoding it, for removing all <StudyItem/>'s
      ))}

      <hr></hr>
      <button onClick={addStudyItem}>
        Add Study Item
      </button>
    </div>
  )
}

  // MVP
  // creating the correct wrapping for the collapsable components
  //1. button to add new <StudyItem> (always below the rendered <StudyItem>'s) 
  //2. a <input> type="text" to create the title of the <StudyItem> (style it so there's no background)
  //3. a clickable button to open the <textarea> or close it (maybe like ^ and opposite)
  //4. a <textarea> to write notes and links about the <StudyItem>
  //5. *save state from the <form>'s in local storage

  //Beyond MVP
  //1. create a way to add more <textarea>'s in each <StudyItem>, and a title for each <textarea>
  //2. add the functionality to drag and drop <textarea>'s from 1 <StudyItem> to another
  //3. style it so that there is a link <input> and a <textarea> beneath that for cleaness
  //4. add a pomodoro timer
  //5. lock the window when the timer is started on the current <StudyItem> and add functionality to enable/disable this feature

  //1. save state
  //2. CSS animation from video useRef()
  //3. add a button to add / remyove <StudyItem>'s
  
