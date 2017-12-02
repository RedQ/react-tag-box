import TagProp from './utils'
import TagContainer from './TagBoxContainer'
import PropTypes from 'prop-types';
export default class TagBox extends TagContainer {
  static propTypes = {
    tags: PropTypes.arrayOf(TagProp)
  }

  tags() {
    return this.props.tags
  }
}
