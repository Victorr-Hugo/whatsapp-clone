import {
  onSnapshot,
  doc,
  arrayUnion,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import {
  createContext,
  useEffect,
  useContext,
  useState,
  useReducer,
} from "react";
import { v4 as uuid } from "uuid";
import { useUsers } from "./userContext";
import { db, storage } from "../libs/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const ChatContext = createContext();

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error("Chat Provider is missing");
  return context;
};

export const ChatProvider = ({ children }) => {
  const { currentUser } = useUsers();
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  useEffect(() => {
    const getChats = () => {
      if (currentUser.uid) {
        const unsub = onSnapshot(
          doc(db, "userChats", currentUser?.uid),
          (doc) => {
            setChats(doc.data());
          }
        );
        return () => {
          unsub();
        };
      } else {
        setChats([]);
      }
    };
    currentUser?.uid && getChats();
  }, [currentUser?.uid]);

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentUser?.uid > action.payload.uid
              ? currentUser?.uid + action.payload.uid
              : action.payload.uid + currentUser?.uid,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  const handleSelect = (u) => {
    console.log(u);
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", state.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unSub();
    };
  }, [state.chatId]);

  const handleSend = async (values) => {
    const img = values.image;
    const text = values.text;
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", state.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser?.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", state.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser?.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser?.uid), {
      [state.chatId + ".lastMessage"]: {
        text,
      },
      [state.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", state.user.uid), {
      [state.chatId + ".lastMessage"]: {
        text,
      },
      [state.chatId + ".date"]: serverTimestamp(),
    });
  };

  return (
    <ChatContext.Provider
      value={{
        data: state,
        dispatch,
        chats,
        handleSelect,
        messages,
        handleSend,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
