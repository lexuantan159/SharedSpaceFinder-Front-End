import { createContext, useContext, useEffect, useState } from "react";
import * as spaceService from "../services/spaces";

const SpaceContext = createContext({});

const SpaceProvider = ({ statusId, ...props }) => {
  const [spaces, setSpaces] = useState([]);
  useEffect(() => {
    const fetchingSpaces = async () => {
      const param = {
        status: statusId,
      };
      const data = await spaceService.getSpace(param);
      console.log("🚀 ~ fetchingSpaces ~ data:", data);
      setSpaces(() => data?.data?.listSpaces);
    };
    fetchingSpaces();
    console.log("🚀 ~ SpaceProvider ~ spaces:", spaces);
  }, [statusId]);
  const value = {
    statusId,
    spaces,
    setSpaces,
  };
  return (
    <SpaceContext.Provider value={value} {...props}></SpaceContext.Provider>
  );
};

function useSpace() {
  const context = useContext(SpaceProvider);
  console.log(context);
  if (typeof context === "undefined")
    throw new Error("useGallery must be used within a GalleryProvider");
  return context;
}

export { useSpace, SpaceProvider };
