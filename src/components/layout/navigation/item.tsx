import { Nav } from '@douyinfe/semi-ui';
import { useNavigate } from 'react-router-dom';

const NavItem = (props: any) => {
  const history = useNavigate()
  const handleLink = (val: string) => {
    history(val)
  }
  const { routes, route, index } = props
  return <>
    {routes.map((i: any) => {
      const { path, children, key, name } = i
      const _path = index ? `${route}/${path}` : path
      return children ?
        <Nav.Sub itemKey={key} text={name} key={key} >
          <NavItem routes={children} route={_path} index={(index ?? 0) + 1} />
        </Nav.Sub> : <Nav.Item itemKey={key} key={key} text={name} onClick={() => handleLink(_path)} />
    })
    }
  </>
}

export default NavItem