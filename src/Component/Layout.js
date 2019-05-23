import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Layout as LayoutAnt, Menu,} from 'antd';

const { Header, Content } = LayoutAnt;

const menus = [
  { path: '/', label: 'Crud' },
  { path: '/login', label: 'Salir' }
];

const Layout = ({ location, children }) => {
  return(
  <LayoutAnt>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[location.pathname]}
        style={{ lineHeight: '64px' }}
      >
        {menus.map(item => (
          <Menu.Item key={item.path}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
    <LayoutAnt>
      <LayoutAnt style={{ padding: '24px' }}>
        <Content style={{
          background: '#fff', padding: 24, margin: 0, minHeight: 280,
        }}
        >
          {children}
        </Content>
      </LayoutAnt>
    </LayoutAnt>
  </LayoutAnt>
);
}
export default withRouter(Layout);