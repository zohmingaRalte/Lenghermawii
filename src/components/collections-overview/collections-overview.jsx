import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionsPreview from "../collection-preview/collection-preview";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./collections-overview.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionsPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
