import Head from "next/head";
import Image from "next/image";
import * as React from "react";
import { useEffect, useMemo, useRef } from "react";
import styles from "../styles/Home.module.css";

import Navbar from "../Components/Navbar";
import StudyItem from "../Components/StudyItem.js";

let renderedStudyList = null;

export default function Home(props) {
	// failed used effect to grab and set state to the LocalStorage variable/default value
	// useEffect(() => {
	//   if (typeof window !== "undefined"){
	//     const prevSession = localStorage.getItem(`User Made Component`)
	//     const parsedPrevSession = !!prevSession ? JSON.parse(prevSession) : undefined;
	//     //const parsedPrevSession = JSON.parse(prevSession)
	//     return answer = parsedPrevSession || [{studyItem: ""}]
	//   } else return [{studyItem: ""}] }, [])

	//set state using an array object for dynamic rendering of <StudyItem/>'s components
	const [studyItemComponent, setStudyItemComponent] = React.useState([
		{ studyItem: 0 },
	]);
	const StudyItemComp = useMemo(() => {
		return { studyItemComponent };
	}, [studyItemComponent]);

	// setFormData((prevFormData) => {
	// 	return {
	// 		...prevFormData,
	// 		studyGroupName: studyGroupNameHistory,
	// 	};

	const addStudyItem = () => {
		// setStudyItemComponent((prevStudyComponent) => {
		// 	return [...prevStudyComponent, { studyItem: prevStudyComponent + 1 }];
		// });
		setStudyItemComponent([...studyItemComponent, { studyItem: 0 }]);
		localStorage.setItem(
			"User Made Component",
			JSON.stringify(studyItemComponent)
		);
		render();
		//get the local storage
		//push to local storage
		//save local storage to an array object
		//set state to the array object
		//map the array object insead of the state
	};

	function lastSession() {
		const prevSession = localStorage.getItem(`User Made Component`);
		const parsedPrevSession = JSON.parse(prevSession);
		setStudyItemComponent(parsedPrevSession);
		console.log("this is the state: " + parsedPrevSession);
		let answer;
		for (let i = 0; i > parsedPrevSession.length; i++) {
			console.log("loop ran 1 time");
			render();
		}

		//change to for loop
		// previousSession = studyItemComponent.map((eachPrevSession, index) => (
		// 	<div key={index}>
		// 		<StudyItem
		// 			index={index}
		// 			studyItemComponent={studyItemComponent}
		// 			setStudyItemComponent={setStudyItemComponent}
		// 		/>
		// 	</div>
		// ));
	}

	useEffect(() => {
		console.log("Index.js has been rendered");
	}, [StudyItemComp]);

	/**
	 * @param  {} ( sets local storage for state of rendered components
	 */

	//try rendering from local storage, add a getter and setter somewhere
	//loop through the retreived object with .map
	let render = () => {
		return (renderedStudyList = studyItemComponent.map(
			(singleStudyItem, index) => (
				<div key={index}>
					<StudyItem
						index={index}
						studyItemComponent={studyItemComponent}
						setStudyItemComponent={setStudyItemComponent}
					/>
				</div>
			)
		));
	};

	// useEffect(() => {
	// 	render();
	// }, [studyItemComponent]);

	//testing useRef****
	// const currentState = useRef();

	// useEffect(() => {
	// 	currentState.current = studyItemComponent;
	// 	console.log("The current state is:" + currentState.current);
	// }, [studyItemComponent]);
	//** */

	// const [studyItemComponent, setStudyItemComponent] = React.useState(() => {
	// 	const prevSession = localStorage.getItem(`User Made Component`);
	// 	const parsedPrevSession = JSON.parse(prevSession);
	// 	return parsedPrevSession || [{ studyItem: "" }];
	// });

	//spread the existing array of numberStudyItems and add a new object with the matching key:value pairs
	// const addStudyItem = () => {
	// 	let studyItemDummy = studyItemComponent;
	// 	console.log("This should show a copy of state" + studyItemDummy);
	// 	const prevSession = localStorage.getItem(`User Made Component`);
	// 	const parsedPrevSession = JSON.parse(prevSession);
	// 	console.log("Parsed state from local storage:" + parsedPrevSession);
	// 	if (parsedPrevSession === null) {
	// 		setStudyItemComponent([...studyItemComponent, { studyItem: true }]);
	// 		localStorage.setItem(
	// 			"User Made Component",
	// 			JSON.stringify(studyItemComponent)
	// 		);
	// 	} else {
	// 		setStudyItemComponent([parsedPrevSession, { studyItem: true }]);
	// 		localStorage.setItem(
	// 			"User Made Component",
	// 			JSON.stringify(studyItemComponent)
	// 		);
	// 	}
	// 	return;
	// };

	// Jakes counter adder for re-rendering the <StudyItem/> components
	// function runAdd(count) {
	//   for (let i = 0; i < count; i++) {
	//     addStudyItem(count);

	//   }
	//   return
	// }

	// useEffect((count) => {
	//   runAdd(count)
	//   console.log('ran')
	// }, [])

	// useEffect(() => {
	//   JSON.parse(localStorage.getItem(`User Made Component`))
	//   if (typeof window !== "undefined"){
	//   const prevSession = localStorage.getItem(`User Made Component`)
	//   console.log(prevSession)
	//   const parsedPrevSession = JSON.parse(prevSession)
	//   return parsedPrevSession || [{studyItem: ""}]
	// }}, [])
	// useEffect(() => {
	// 	localStorage.setItem(
	// 		"User Made Component",
	// 		JSON.stringify(studyItemComponent)
	// 	);
	// }, [studyItemComponent]);
	function checkNumber() {
		let numbers = 0;
		for (let i = 0; i > studyItemComponent.length; i++) {
			numbers++;
		}
		return numbers;
	}

	return (
		<div>
			<header>
				<Navbar />
			</header>
			<button onClick={lastSession}> Restore Session </button>

			{renderedStudyList ? <div>{renderedStudyList}</div> : null}

			{/* {studyItemComponent.map((singleStudyItem, index) => ( //*look into the map feature*: for every studyItemComponent render a <div> with <StudyItem/> in it and add an index
      <div key={index}>
        <StudyItem index={index} studyItemComponent={studyItemComponent} setStudyItemComponent={setStudyItemComponent} />
      </div> // ^^ how to handle rendering the first study item without hardcoding it, for removing all <StudyItem/>'s
      ))} */}

			<hr></hr>
			<button onClick={addStudyItem}>Add Study Item</button>
		</div>
	);
}

//state of the <StudyItem> is being managed in the it's own component
// a new study item is being generated each load
// store a state variable or use the key to conditionally render the components

// add a state variable for the component if it's rendered false/true
// use a useEffect to check if the state of studyItemComponent changes
// then set

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
//3. add a button to add / remove <StudyItem>'s

//features to be added:
//1. a pipeline for completed items
//2. a text editor in the <textarea>
//3. convert it into a explorer addon -- make a way to quickly add an item to a study list
