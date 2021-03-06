import classnames from 'classnames'


const Link = props => (
  <li className={ classnames(props.className, { active: props.activeSlug === props.frameId})}>
    <a href={`${ props.frameId }`} data-frameid={ props.frameId }>
      { props.children }
    </a>
  </li>
)

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="logo">
          <a href="/" data-frameid="home">
            9MR
          </a>
        </div>
        <div className="list-container">
          <ul>
            <Link frameId="volunteer" {...this.props }>
              Volunteer
            </Link>
            <Link frameId="donate" {...this.props }>
              Donate
            </Link>
            <Link frameId="share" {...this.props }>
              Share
            </Link>
            <li className="blank"/>
            <Link frameId="food" {...this.props }>
              Get Food
            </Link>
            <li className="blank"/>
            <li>
              <a href={`${ this.props.globals.gallery_url }`} target="_blank">
                Gallery
              </a>
            </li>
            <li className="blank"/>
            <div className="align-bottom">
              <Link frameId="about" {...this.props }>
                About
              </Link>
              <Link frameId="press" {...this.props } >
                Press
              </Link>
              <Link frameId="contact" {...this.props }>
                Contact
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav;
