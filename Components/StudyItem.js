import styles from '../styles/Home.module.css'
import * as React from 'react';
import { useEffect } from 'react'

import Home from "../pages/_app.js"
//import { useLocalStorage } from "./useLocalStorage.js";

export default function StudyItem(props) {
  
  const index = props.index

  //state to toggle open a study group
  const [open, setOpen] = React.useState(false)//useLocalStorage(`open or not ${index}`, false) // ***broken***

  const toggleOpen = () => {
    setOpen(!open)
  }

  //form data for the Group name, list item link, and list item notes
  const [formData, setFormData] = React.useState({studyGroupName: "", studyItemLink: "", studyItemNotes: ""})
  function handleChange(event) {
    setFormData(prevFormData => { 
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
  }

  //need to pass the index of the removed studyItemComponent to index.js so it won't rerender the entire page
  function removeStudyItem(index) {
    const tempStudyItems = [...props.studyItemComponent]
    tempStudyItems.splice(index, 1)
    props.setStudyItemComponent(tempStudyItems)
  }


  // controlling history via local storage for OPENING <StudyItem/>'s
  useEffect(() => {
    const openHistory = JSON.parse(localStorage.getItem(`open or not ${index}`));
    if (openHistory) {
      setOpen(openHistory);
    }
  }, []);
  useEffect(() => {
    // remembering in local storage if the study list is open
    localStorage.setItem(`open or not ${index}`, JSON.stringify(open));
  }, [open]);

  // controlling history via local storage for remembering Study Group names for each <StudyItem/>'s
  useEffect(() => {
    const studyGroupNameHistory = JSON.parse(localStorage.getItem(`Study Group Name ${index}`));
    if (studyGroupNameHistory) {
      formData.studyGroupName = studyGroupNameHistory;
    }
  }, []);
  useEffect(() => {
    // remembering in local storage the study group name
    localStorage.setItem(`Study Group Name ${index}`, JSON.stringify(formData.studyGroupName));
  }, [formData.studyGroupName]);

  // controlling history via local storage for remembering Study Group links for each <StudyItem/>'s
  useEffect(() => {
    const studyGroupLink = JSON.parse(localStorage.getItem(`Study link ${index}`));
    if (studyGroupLink) {
      formData.studyItemLink = studyGroupLink;
    }
  }, []);
  useEffect(() => {
    // remembering in local storage the link for the studylist item
    localStorage.setItem(`Study link ${index}`, JSON.stringify(formData.studyItemLink));
  }, [formData.studyItemLink]);

  // controlling history via local storage for remembering Study Group notes for each <StudyItem/>'s
  useEffect(() => {
    const studyGroupNotes = JSON.parse(localStorage.getItem(`Study Item Notes ${index}`));
    if (studyGroupNotes) {
      formData.studyItemNotes = studyGroupNotes;
    }
  }, []);
  useEffect(() => {
    // remembering in local storage studyItem notes
    localStorage.setItem(`Study Item Notes ${index}`, JSON.stringify(formData.studyItemNotes));
  }, [formData.studyItemNotes]);

  //counting the number of <StudyItem/> and rendering them from local storage

  return (
    <div>
      <div className={styles.studyListHeaderContainer}>
        <button onClick={toggleOpen}> {open ? "Close" : "Open" } </button>
        <form className={styles.studyGroupName}>
            <input 
              name="studyGroupName"
              types="text"
              placeholder="Create a Study Group"
              onChange={handleChange}
              value={formData.studyGroupName}
            />
        </form>
      </div>
      
      
      {open ?
      <form className={styles.studyListItemBody}>
        <input
          name="studyItemLink"
          type="text"
          placeholder="Enter a link here"
          onChange={handleChange}
          value={formData.studyItemLink}
        />
        <textarea 
          name="studyItemNotes"
          type="text"
          placeholder="Enter notes here"
          onChange={handleChange}
          value={formData.studyItemNotes}
        />

        <button onClick={() => removeStudyItem} index={index}> Remove Item </button>
      </form>  
      : <div></div> 
      }

    </div>
  )
}
