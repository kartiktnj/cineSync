import React from "react";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";
import { BrowseContainer } from "../containers/browse";

export default function Browse() {
  const { series } = useContent("series");
  const { movie } = useContent("movie");

  const slides = selectionFilter({ series, movie });

  return <BrowseContainer slides={slides} />;
}
