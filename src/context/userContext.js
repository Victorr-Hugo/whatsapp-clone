import { createContext, useEffect, useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db, storage } from "../libs/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const UserContext = createContext();

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("User Provider is missing");
  return context;
};

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [configNav, setConfigNav] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      unsub();
    };
  }, []);

  const registerUser = async (values) => {
    const displayName = values.displayName;
    const email = values.email;
    const password = values.password;
    const file = values.image;
    console.log(values);

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
          } catch (err) {
            console.log(err);
          }
        });
      });
    } catch (err) {
      console.error(err);
    }
  };

  const signinUser = async (values) => {
    const email = values.email;
    const password = values.password;

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = async (username) => {
    try {
      const q = query(
        collection(db, "users"),
        where("displayName", "==", username)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        setUser(doc.data());
      });
    } catch (error) {
      console.error(error);
    }
  };
  const updateDisplayName = async (newDisplayName) => {
    try {
      const user = auth.currentUser;
      await updateProfile(user, { displayName: newDisplayName });
      await updateDoc(doc(db, "users", user.uid), {
        displayName: newDisplayName,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updatePhotoURL = async (values) => {
    const displayName = currentUser.displayName;
    const file = values.image;
    const user = auth.currentUser;

    try {
      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      //Upload new photo
      await uploadBytesResumable(storageRef, file).then(async () => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(user, {
              displayName,
              photoURL: downloadURL,
            });
            //update user on firestore
            await updateDoc(doc(db, "users", user.uid), {
              photoURL: downloadURL,
            });
          } catch (err) {
            console.log(err);
          }
        });
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <UserContext.Provider
      value={{
        currentUser,
        user,
        setUser,
        registerUser,
        signinUser,
        handleSearch,
        setConfigNav,
        configNav,
        updateDisplayName,
        updatePhotoURL,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
