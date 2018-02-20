const defaultState = {
  notes: {},
  pageNumber: 0,

};

export default (prevstate = defaultState, action) => {
  switch (action.type) {
    case 'UPDATETITLEARRAY': {
      console.log('The TITLE ARRAY is: ', prevstate.titleArray);
      return {
        ...prevstate,
        titleArray: prevstate.titleArray.concat(prevstate.currentTitle),
        currentTitle: '',
      };
    }

    case 'UPDATENOTEARRAY': {
      console.log('The NOTE ARRAY is: ', prevstate.notesArray);
      return {
        ...prevstate,
        notesArray: prevstate.notesArray.concat(prevstate.currentNote),
        currentNote: '',

      };
    }
    case 'CHANGEPAGE': {
      return {
        ...prevstate,
        pageNumber: action.payload,

      };
    }
    case 'ADDNOTE': {
      console.log('The action payload is', action.payload);
      const tempTitle = prevstate.titleArray[action.payload];
      const tempNote = prevstate.notesArray[action.payload];
      const tempTitleArray = prevstate.titleArray;
      const tempNoteArray = prevstate.notesArray;
      tempTitleArray.splice(action.payload, 1);
      tempNoteArray.splice(action.payload, 1);
      return {
        ...prevstate,
        currentTitle: tempTitle,
        currentNote: tempNote,
        titleArray: tempTitleArray,
        notesArray: tempNoteArray,
        pageNumber: 0,
      };
    }
    case 'UPDATENOTES': {
      console.log('THE OBJECT IS: ', prevstate.notes);
      const temp = Object.assign({}, prevstate.notes, {
        [action.payload.id]: {
          title: action.payload.title,
          note: action.payload.note,
        },
      });
      return {
        ...prevstate,
        notes: temp,
      };
    }
    default:
    {
      return prevstate;
    }
  }
};
