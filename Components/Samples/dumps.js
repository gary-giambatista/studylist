// useEffect for object
useEffect(() => {
	let studyGroupNameHistory = "";
	if (localStorage.getItem(`Study Group Name ${index}`) !== null && undefined) {
		const studyGroupNameHistory = JSON.parse(
			localStorage.getItem(`Study Group Name ${index}`)
		);
	}
	if (studyGroupNameHistory) {
		console.log(
			"Using Study group name from local storage to set state: " +
				studyGroupNameHistory
		);
		return setFormData({ ...formData, name: studyGroupNameHistory });
		//1 formData.studyGroupName = studyGroupNameHistory;
	}
}, []);
