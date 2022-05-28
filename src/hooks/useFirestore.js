import { useReducer } from 'react';
import { projectFirestore } from '../firebase/config';

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { isPending: true, document: null, success: false, error: null };
    case 'ADDED_DOCUMENT':
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case 'DELETED_DOCUMENT':
      return { isPending: false, document: null, success: true, error: null };
    case 'ERROR':
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);

  // collection ref
  const ref = projectFirestore.collection(collection);

  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const addedDocument = await ref.add(doc);
      dispatch({ type: 'ADDED_DOCUMENT', payload: addedDocument });
    } catch (err) {
      dispatch({ type: 'ERROR', payload: err.message });
    }
  };

  const deleteDocument = async (id) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      await ref.doc(id).delete();
      dispatch({ type: 'DELETED_DOCUMENT' });
    } catch (err) {
      dispatch({ type: 'ERROR', payload: 'could not delete' });
    }
  };

  const updateDocument = async (id, updates) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const updatedDocument = await ref.doc(id).update(updates);
      dispatch({ type: 'UPDATED_DOCUMENT', payload: updatedDocument });
      return updatedDocument;
    } catch (err) {
      dispatch({ type: 'ERROR', payload: err.message });
      return null;
    }
  };

  return { addDocument, deleteDocument, updateDocument, response };
};
