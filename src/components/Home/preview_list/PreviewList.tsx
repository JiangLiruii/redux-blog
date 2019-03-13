import { Component } from 'react';
import { PreviewComponent } from '../preview/Preview';

class PreviewList extends Component {
  render() {
    return this.props.articleList.map((item) => (<PreviewComponent {...item} key={item.id} />));
  }
}