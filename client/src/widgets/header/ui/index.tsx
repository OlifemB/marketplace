import React from 'react';
import {Container, MenuItem, MenuItemProps, Nav} from "@/shared/ui/components";
import RenderList from "@/shared/helpers/renderList";


const menuItems = [{
    id: "home" as const,
    label: "Home",
    icon: "",
    url: "/"
}, {
    id: "profile" as const,
    label: "Profile",
    icon: "",
    url: "/profile"
}, {
    id: "cart" as const,
    label: "Cart",
    icon: "",
    url: "/cart"
}]


const Header = () => {
    return (
        <div className={'HEADER'}>
            <Container>
                <Nav>
                    <RenderList
                        items={menuItems}
                        renderItem={(item) =>
                            <MenuItem key={item.id} {...item}/>
                        }
                    />
                </Nav>
            </Container>
        </div>
    );
};

export default Header;