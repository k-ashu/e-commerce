import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../preview-collection/preview-collection";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./collections-overview.scss";

const CollectionsOverview = ({ collections }) => (
  <div className=" collection-overview">
    {collections.map(({ id, ...collection }) => (
      <CollectionPreview key={id} {...collection} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
