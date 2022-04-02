import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {

    const [tweetList, setList] = useState([]);
    const [usersList, setUsersList] = useState([])
    const [tweetUpload, setTweet] = useState({});
    const [tweetUpdate, setUpdate] = useState({});
    const [arrayDelete, setArrayDel] = useState({});
    const [buttonUpload , setButtonUpload] = useState(false);
    const [tweetDelete, setTweetDelete] = useState(null);
    const [buttonDelete, setButtonDelete] = useState(false);
    const [user, setUser] = useState({});
    const [otherUser, setOtherUser] = useState({});
    const [loading, setLoading] = useState(false);

    return (
        <AppContext.Provider
          value={{
              tweetList,
              setList,
              usersList, 
              setUsersList,
              tweetUpload,
              setTweet,
              tweetUpdate,
              setUpdate,
              buttonUpload,
              setButtonUpload,
              tweetDelete,
              setTweetDelete,
              buttonDelete,
              setButtonDelete,
              user,
              setUser, 
              arrayDelete,
              setArrayDel,
              otherUser, 
              setOtherUser, 
              loading, 
              setLoading
          }}
        >
          {children}
        </AppContext.Provider>
      );
    }