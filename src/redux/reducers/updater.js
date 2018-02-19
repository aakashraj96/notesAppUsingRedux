const defaultState = {
  currentTitle: '',
  titleArray: [],
  currentNote: '',
  notesArray: [],
  pageNumber: 0,
};

export default (prevstate = defaultState, action) => {
  switch (action.type) {
    case 'UPDATETITLE': {
      return {
        ...prevstate,
        currentTitle: action.payload,
      };
    }
    case 'UPDATETITLEARRAY': {
      console.log('The TITLE ARRAY is: ', prevstate.titleArray);
      return {
        ...prevstate,
        titleArray: prevstate.titleArray.concat(prevstate.currentTitle),
        currentTitle: '',
      };
    }
    case 'UPDATENOTE': {
      return {
        ...prevstate,
        currentNote: action.payload,
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
    default:
    {
      return prevstate;
    }
  }
};
