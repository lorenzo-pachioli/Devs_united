import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {

    const [tweetList, setList] = useState([]);
    const [tweetUpload, setTweet] = useState({
        Name:"",
        Tweet:"",
        Likes: 0
    });
    const [tweetUpdate, setUpdate] = useState({});
    const [buttonUpload , setButtonUpload] = useState(false);
    const [tweetDelete, setTweetDelete] = useState(null);
    const [buttonDelete, setButtonDelete] = useState(false);

    return (
        <AppContext.Provider
          value={{
              tweetList,
              setList,
              tweetUpload,
              setTweet,
              tweetUpdate,
              setUpdate,
              buttonUpload,
              setButtonUpload,
              tweetDelete,
              setTweetDelete,
              buttonDelete,
              setButtonDelete
          }}
        >
          {children}
        </AppContext.Provider>
      );
    }