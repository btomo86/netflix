import React from "react";
import { BrowseContainer } from "../containers/browse";
import { useContext } from "../hooks/";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
  const { series } = useContext("series");
  const { films } = useContext("films");

  const slides = selectionFilter({ series, films });
  console.log(slides);

  return <BrowseContainer slides={slides} />;
}
