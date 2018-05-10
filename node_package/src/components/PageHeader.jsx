import React from 'react';

/**
 * @desc Place inside
 * {@link pageflow.react.components.PageScroller|PageScroller} to
 * display the page's headings.
 *
 * @alias pageflow.react.components.PageHeader
 * @class
 * @since 0.1
 *
 * @prop page
 *   Required. The page object to read configuration properties from.
 */
export default class extends React.Component {
  render() {
    return (
      <div className="page_header">
        <h2>
          <input className="tagline">{this.props.page.tagline}</input>
          <input className="title">{this.props.page.title}</input>
          <input className="subtitle">{this.props.page.subtitle}</input>
        </h2>
      </div>
    );
  }
};
