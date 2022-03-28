
import { Nav } from '@douyinfe/semi-ui';
import { routes } from '../../../router/index'
import NavItem from './item'
const NavApp = () => {
  return (
    <Nav
      style={{ height: '100%' }}
      onClick={(el: any) => {
        console.log(el)
      }}
    >
      <Nav.Header logo={<img src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/webcast_logo.svg" />} text={'Semi 运营后台'} />
      <NavItem routes={routes} />
      <Nav.Footer collapseButton={true} />
    </Nav>
  );

}

export default NavApp