import React, { useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, SkinOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import Home from '~/pages/Home/Home';

const { Sider } = Layout;

interface MenuItem {
    key: string;
    label: JSX.Element;
    icon: JSX.Element;
}

const AppLayoutSider: React.FC = () => {
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(true); // State for collapsed/expanded sidebar

    // Define menu items with their corresponding keys, labels, and icons
    const items: MenuItem[] = [
        {
            key: 'products',
            label: <Link to="/">Products</Link>,
            icon: <SkinOutlined />,
        },
        {
			key: 'home',
			label: <Link to={'/home'}>Home</Link>,
			icon: <HomeOutlined></HomeOutlined>,
		},
        // Add more menu items as needed
    ];

    // Memoized calculation of the active menu item based on the current location
    const activeItem = items.find((e) => location.pathname.includes(e.key))?.key;

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={toggleCollapsed}
            style={{ borderInlineEnd: '1px solid gray' }}
            theme="light"
            breakpoint="lg"
            collapsedWidth="0"
            width={240}
        >
            <div className="demo-logo-vertical" />
            <Menu theme="light" mode="inline" selectedKeys={activeItem ? [activeItem] : []}>
                {items.map((item) => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        {item.label}
                    </Menu.Item>
                ))}
            </Menu>
        </Sider>
    );
};

export default AppLayoutSider;
