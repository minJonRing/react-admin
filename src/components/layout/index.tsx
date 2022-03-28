import { Layout } from '@douyinfe/semi-ui';
import Navigation from './navigation/index'
import './index.scss'
const layout = (props: any) => {
  const { children } = props
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Layout className="components-layout">
      <Sider>
        <Navigation />
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
          {children}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}
export default layout

