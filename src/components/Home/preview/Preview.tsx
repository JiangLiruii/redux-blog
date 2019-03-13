import { Component } from 'react';
import CSSModule from 'react-css-modules';
const preview_style = require('./Preview.css');
interface PreviewOwnProps {
  desc:string;
  date:string;
}
interface PreviewMapProps {
  title:string;
  link:string;
}

class Preview extends Component<PreviewOwnProps & PreviewMapProps> {
  render() {
    return (
      <article styleName="article-preview-item">
        <h1 styleName="title">{this.props.title}</h1>
        <span styleName="date">{this.props.date}</span>
        <p styleName="desc">{this.props.desc}</p>
      </article>
    );
  }
}

export let PreviewComponent = CSSModule(Preview, preview_style, {allowMultiple: true});